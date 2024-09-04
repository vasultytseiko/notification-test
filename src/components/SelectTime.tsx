import React, { useState } from "react";

interface SelectTimeProps {
    time: string;
    setTime: (item: string) => void;
}

export default function SelectTime({time, setTime}:SelectTimeProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };
  return (
    <div className="relative w-full mx-auto">
      <input
        type="time"
        value={time}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 text-gray-500 font-satoshi-medium text-md py-3 px-5 bg-white focus:blue-400 focus:border-blue-400 block w-full outline-none"
      />
    </div>
  );
}
