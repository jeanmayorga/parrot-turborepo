import { motion } from "framer-motion";

interface Props {
  message: string;
}

export default function Alert({ message }: Props) {
  if (message === "") return null;

  return (
    <motion.div
      className="w-full opacity-0 p-0 flex items-center text-red-500 bg-red-100 rounded-lg shadow"
      animate={{ padding: "1rem", opacity: 1 }}
    >
      <div className="text-sm font-normal">{message}</div>
    </motion.div>
  );
}
