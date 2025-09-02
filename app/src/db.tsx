import { useLocalStorage } from "@uidotdev/usehooks";

export type Product = {
  id: string;
  modelNumber: string;
  name: string;
};
export type CreateProduct = Omit<Product, "id">;

type Db = {
  products: Product[];
};

export const useDb = () => {
  const [db, setDb] = useLocalStorage<Db>("db");

  const products = db?.products || [];
  const addProduct = (product: CreateProduct) => {
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

const createId = () => new Date().toISOString();
