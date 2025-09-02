import { useLocalStorage } from "@uidotdev/usehooks";

type Product = {
  id: string;
  modelNumber: string;
  name: string;
};

type Db = {
  products: Product[];
};

export const useDb = () => {
  const [db, setDb] = useLocalStorage<Db>("db");

  const products = db?.products || [];
  const addProduct = (product: Omit<Product, "id">) => {
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
