import React from "react";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-end">
      {/* Error Message */}
      <p className="text-red-500 text-lg mb-2">{error}</p>

      {/* Number Boxes */}
      <div className="flex gap-6">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`h-[72px] w-[72px] border border-black grid place-items-center text-2xl font-bold cursor-pointer transition-all duration-200
              ${
                selectedNumber === value
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Label */}
      <p className="text-2xl font-bold mt-3">Select Number</p>
    </div>
  );
};

export default NumberSelector;