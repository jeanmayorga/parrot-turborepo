import { useMemo } from "react";
import { useProducts } from "@parrot/hooks";
import { ICategory, IStore } from "@parrot/types";

import { Category, Spinner } from "./";

interface Props {
  store: IStore;
}
export default function Store({ store }: Props) {
  const { isLoading, products } = useProducts(store.uuid);

  const categories = useMemo(() => {
    return products.reduce<ICategory[]>((categories, product) => {
      const categoryExists = categories.some(
        (category) => category.uuid === product.category.uuid
      );
      const categoryIndex = categories.findIndex(
        (category) => category.uuid === product.category.uuid
      );

      if (categoryExists) {
        categories[categoryIndex].products.push({ ...product });
      } else {
        categories.push({
          ...product.category,
          products: [product],
        });
      }

      return categories;
    }, []);
  }, [products]);

  if (isLoading || !products) {
    return (
      <div className="flex justify-center py-4">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div
        className="px-4 py-2 text-white"
        style={{ background: store.config.brandColor }}
      >
        <h1>{store.name}</h1>
      </div>
      <div>
        {categories.map((category) => (
          <Category key={category.uuid} category={category} />
        ))}
      </div>
    </div>
  );
}
