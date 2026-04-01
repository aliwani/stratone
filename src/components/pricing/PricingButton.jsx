import React from "react";

function PricingButton({text }) {
  return (
    <div>
      <button className={`bg-white h-10 w-37.5 md:w-45 md:h-12.5 p-0.5`}>
        <div className="flex items-center justify-center w-full h-full bg-black rounded-lg">
          <span className="font-clashRegular font-semibold md:text-lg text-white uppercase tracking-wider">
           {text}
          </span>
        </div>
      </button>
      ;
    </div>
  );
}

export default PricingButton;
