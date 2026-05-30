import React from "react";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div
        className="cursor-pointer active:scale-95 transition-transform duration-150"
        onClick={roleDice}
      >
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          className="w-[150px]"
        />
      </div>

      <p className="text-2xl mt-4">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default RoleDice;