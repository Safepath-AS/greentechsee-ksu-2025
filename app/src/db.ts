import { useLocalStorage } from "@uidotdev/usehooks";

const MAX_PRODUCT_SIZE = 1024; // in bytes

export type Product = {
  id: string;
  modelNumber: string;
  name: string;
};
export type CreateProduct = Omit<Product, "id">;

export type Db = {
  products: Product[];
};

export const useDb = () => {
  const [db, setDb] = useLocalStorage<Db>("db");

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

  return {
    products,
    addProduct,
    deleteProduct,
  };
};

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const createId = () => new Date().toISOString();
