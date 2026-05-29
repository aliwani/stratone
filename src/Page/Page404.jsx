import React from "react";
import Img404 from "@/assets/404.png";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <div className="bg-white h-full w-full p-0.5 pb-0 flex flex-col md:flex-row gap-0.5">
      <div className="bg-[#111111] flex items-center justify-center h-fit md:h-screen p-20 w-full md:w-1/2 rounded-2xl">
        <img className=" h-60 w-60 md:h-fit md:w-fit cover" src={Img404} alt="404" />
      </div>
      <div className="bg-[#111111] h-fit py-10 md:h-screen leading-none flex flex-col gap-10 items-center justify-center w-full md:w-1/2 rounded-2xl">
        <div className="flex flex-col px-10 text-center items-center gap-2 justify-center">
          <h1 className="font-antonSC text-white text-[60px] md:text-[110px] xl:text-[200px]">
            404
          </h1>
          <h3 className="font-antonSC text-white text[28px] md:text-[32px] xl:text-[40px]">
            page not found
          </h3>
          <h5 className="font-clashRegular text-white md:text-[18px] xl:text-[22px]">
            The page you are looking for doesn't exist or has been moved
          </h5>
        </div>
        <Link to="/" className="cursor-pointer h-15 w-40 text-white p-0.5 uppercase font-clashRegular bg-white">
          <div className="bg-[#111111] flex items-center justify-center font-clashRegular font-semibold text-[18px] md:text-[20px] h-full w-full transition-all duration-700 hover:rounded-none rounded-lg">
            back to home
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
