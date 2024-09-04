import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-feather";

interface SelectProps {
  list: string[];
  value: string;
  setValue: (item: string) => void;
}

export default function Select({ list, value, setValue }: SelectProps) {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChooseValue = (selectedValue: string) => {
    setValue(selectedValue);
    setIsOpened(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full h-fit" ref={dropdownRef}>
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className={`relative w-full h-fit border ${isOpened? 'border-blue-400 ': 'border-gray-300 '} rounded-lg px-5 py-3 text-md font-satoshi-medium text-gray-500 cursor-pointer flex items-center justify-between`}
      >
        {value || "Select an option"}
        <ChevronDown
          style={{
            transform: isOpened ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          className="stroke-gray-400 h-[20px]"
        />
      </div>
      {isOpened && (
        <div className="absolute bg-white rounded-lg shadow-md font-satoshi p-2 w-full mt-1 z-[1000] h-[200px] overflow-y-auto">
          {list.map((item) => (
            <div
              key={item}
              className="px-3 py-2 font-satoshi-medium text-gray-400 cursor-pointer hover:bg-gray-100 rounded-lg duration-300"
              onClick={() => handleChooseValue(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
