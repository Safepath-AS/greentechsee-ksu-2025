import { useLocalStorage } from "@uidotdev/usehooks";

const MAX_PRODUCT_SIZE = 1024 * 1024 * 8; // 8 MB

export type Product = {
  id: string;
  modelSpecification: string;
  name: string;
  description?: string;
  ean: string;
  articleNumber: string;
  series: string;
  boughtAt: string; // ISO date string
  tagIds?: string[];
  imageData?: string;
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

    const newProduct = { ...product, id: createId() };
    setDb({
      ...db,
      products: [...products, newProduct],
    });

    return newProduct;
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

    const newTag = { ...tag, id: createId() };
    setDb({
      ...db,
      tags: [...tags, newTag],
    });

    return newTag;
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
