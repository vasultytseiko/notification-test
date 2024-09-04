import React, { useRef, useEffect } from "react";

interface TextAreaProps {
  value: string;
  setValue: (item: string) => void;
}

export default function TextArea({ value, setValue }: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border border-gray-300 rounded-lg p-2 text-gray-500 font-satoshi-medium text-md py-3 px-5 bg-white focus:ring-blue-400 focus:border-blue-400 block w-full outline-none resize-none overflow-hidden"
    ></textarea>
  );
}

