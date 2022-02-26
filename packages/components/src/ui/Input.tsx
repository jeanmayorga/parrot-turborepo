import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  ref?: React.LegacyRef<HTMLInputElement>;
  name: string;
  disabled?: boolean;
  error?: FieldError;
  errorMessage?: string;
}

export default forwardRef(
  (
    {
      onChange,
      onBlur,
      type,
      placeholder,
      name,
      disabled,
      error,
      errorMessage,
    }: Props,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const hasError = Boolean(error?.type);

    return (
      <>
        <input
          // autoComplete="off"
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          type={type}
          className={clsx(
            hasError
              ? "border-red-400 text-red-400 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500",
            disabled && "opacity-50",
            "bg-white border text-gray-900 text-sm rounded block w-full p-2.5 transition-all"
          )}
          placeholder={placeholder}
          name={name}
          id={name}
          disabled={disabled}
        />
        {hasError && (
          <span className="font-light text-xs block text-red-500">
            {errorMessage || error?.message}
          </span>
        )}
      </>
    );
  }
);
