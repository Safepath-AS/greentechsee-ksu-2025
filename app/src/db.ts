import { useLocalStorage } from "@uidotdev/usehooks";

const MAX_PRODUCT_SIZE = 1024; // in bytes

export type Product = {
  id: string;
  modelNumber: string;
  name: string;
  tagIds: string[];
};
export type CreateProduct = Omit<Product, "id">;

export type Tag = {
  id: string;
  name: string;
};
export type CreateTag = Omit<Tag, "id">;

export type Db = {
  products?: Product[];
  tags?: Tag[];
};

export const useDb = () => {
  const [db, setDb] = useLocalStorage<Db>("db");

  // Products
  const products = db?.products || [];
  const addProduct = (product: CreateProduct) => {
    if (JSON.stringify(product).length > MAX_PRODUCT_SIZE) {
      throw new ValidationError("Produktet er for stort");
    }
    setDb({
      ...db,
      products: [...products, { ...product, id: createId() }],
    });
  };
  const deleteProduct = (id: string) => {
    setDb({
      ...db,
      products: products.filter((p) => p.id !== id),
    });
  };

  // Tags
  const tags = db?.tags || [];
  const addTag = (tag: CreateTag) => {
    if (JSON.stringify(tag).length > MAX_PRODUCT_SIZE) {
      throw new ValidationError("Tagget er for stort");
    }
    setDb({
      ...db,
      tags: [...tags, { ...tag, id: createId() }],
    });
  };
  const deleteTag = (id: string) => {
    setDb({
      ...db,
      tags: tags.filter((t) => t.id !== id),
    });
  };

  return {
    products,
    addProduct,
    deleteProduct,
    tags,
    addTag,
    deleteTag,
  };
};

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const createId = () => new Date().toISOString();
