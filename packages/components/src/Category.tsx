import { useState } from "react";
import { motion } from "framer-motion";
import { ICategory } from "@parrot/types";

import { Product } from "./";

interface Props {
  category: ICategory;
}
export default function Category({ category }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <div
        onClick={handleCollapse}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-y py-2 px-4 flex justify-between items-center cursor-pointer select-none"
      >
        <div>
          {category.name} ({category.products.length})
        </div>
        <div>{isCollapsed ? "Open" : "Close"}</div>
      </div>
      <motion.div
        animate={{ height: isCollapsed ? 0 : "auto" }}
        className="overflow-hidden"
      >
        {category.products.map((product) => (
          <Product key={product.uuid} product={product} />
        ))}
      </motion.div>
    </>
  );
}
