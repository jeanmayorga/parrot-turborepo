import { useEffect, useState } from "react";
import { parrotApi } from "@parrot/services";
import { IProduct } from "@parrot/types";

export function useProducts(store: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function request() {
      try {
        setIsLoading(true);
        const { data } = await parrotApi.get(`/v1/products?store=${store}`);
        setProducts(data.results);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    request();
  }, [store]);

  return { isLoading, error, products };
}
