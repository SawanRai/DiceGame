import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-white px-[18px] py-[10px] bg-black rounded-[5px] min-w-[220px] text-[16px] border border-transparent cursor-pointer transition-all duration-300 hover:bg-white hover:border-black hover:text-black"
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-black px-[18px] py-[10px] bg-white rounded-[5px] min-w-[220px] text-[16px] border border-black cursor-pointer transition-all duration-300 hover:bg-black hover:border-transparent hover:text-white"
    >
      {children}
    </button>
  );
};