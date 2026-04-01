import React from "react";

function Header({heading}) {
  return (
    <div className="flex items-center justify-center  w-full">
      <h2 className=" font-antonSC text-white text-[40px] md:text-[64px] xl:text-[120px] leading-none">
        {heading}
      </h2>
    </div>
  );
}

export default Header;
