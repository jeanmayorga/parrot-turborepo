import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface Props {
  children: React.ReactNode;
  error?: FieldError;
  htmlFor?: string;
}
export default function Label({ children, error, htmlFor }: Props) {
  const hasError = Boolean(error?.type);

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        hasError ? "text-red-400" : "text-gray-400",
        "block mb-1 text-sm"
      )}
    >
      {children}
    </label>
  );
}
