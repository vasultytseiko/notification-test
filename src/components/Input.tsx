import React from "react";

interface InputProps {
  value: string;
  setValue: (item: string) => void;
  type: string;
  placeholder?: string;
}
export default function Input({ value, setValue, type, placeholder }: InputProps) {
  return (
    <div className="relative w-full mx-auto">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 text-gray-500 font-satoshi-medium text-md py-3 px-5 bg-white focus:blue-400 focus:border-blue-400 block w-full outline-none"
      />
    </div>
  );
}
