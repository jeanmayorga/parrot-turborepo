import { useState } from "react";
import Image from "next/image";
import { parrotApi } from "@parrot/services";
import { IProduct } from "@parrot/types";

import { Spinner } from "./";

interface Props {
  product: IProduct;
}
export default function Product({ product }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(
    product.availability === "AVAILABLE"
  );

  const handleCheckbox = async (isCheckedValue: boolean) => {
    try {
      setIsLoading(true);
      const availability = isCheckedValue ? "AVAILABLE" : "UNAVAILABLE";
      const { data } = await parrotApi.put(
        `/v1/products/${product.uuid}/availability`,
        { availability }
      );
      setIsChecked(data.result.availability === "AVAILABLE");
    } catch (error) {
      setIsChecked(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div key={product.uuid} className="py-2 pl-8 pr-4 flex relative">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-[rgba(255,255,255,.2)]">
          <Spinner />
        </div>
      )}
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width="100"
          height="100"
        />
      </div>
      <div className="flex flex-1 justify-between">
        <div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
        <div>
          <label
            htmlFor={product.uuid}
            className="flex relative items-center mb-4 cursor-pointer"
          >
            <input
              type="checkbox"
              id={product.uuid}
              className="sr-only"
              checked={isChecked}
              onChange={(e) => handleCheckbox(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
