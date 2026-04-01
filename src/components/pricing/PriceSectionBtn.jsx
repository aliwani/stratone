import React from "react";

function PriceSectionBtn({ text }) {
  return (
    <button className={`bg-white h-10 md:h-13 w-full p-0.5`}>
      <div className="flex items-center justify-center w-full h-full bg-black rounded-lg">
        <span className="font-clashRegular font-semibold md:text-lg text-white uppercase tracking-wider">
          {text}
        </span>
      </div>
    </button>
  );
}

export default PriceSectionBtn;
