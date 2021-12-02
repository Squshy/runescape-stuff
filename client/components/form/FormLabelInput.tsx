import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { FormErrorMessage } from "./FormErrorMessage";

type FormLabelInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export const FormLabelInput: React.FC<FormLabelInputProps> = ({
  label,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div>
      <label htmlFor={field.name} className="font-semibold text-lg">
        {label}
      </label>
      <input
        className={`focus:ring-1 focus:outline-none w-full text-sm placeholder-[#666] border ${
          error
            ? "border-error focus:border-error focus:ring-error"
            : "border-[#444] focus:border-blue-600 focus:ring-blue-600"
        } rounded-md py-2 px-2 bg-[#333]`}
        {...field}
        {...props}
        id={field.name}
      />
      {error && <FormErrorMessage text={error} />}
    </div>
  );
};
