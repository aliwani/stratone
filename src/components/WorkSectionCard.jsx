import React from "react";

function WorkSectionCard({img ,list}) {
  console.log(img);
  
  return (
    <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 md:w-55  xl:min-w-84 p-2 ">
      <div className="w-full md:h-41.25 xl:h-57.5 p-0.5 md:p-1 bg-white">
        <img
          src={img}
          className="w-full object-cover h-[clamp(2rem,80vw,35rem)] md:h-full rounded-2xl "
        ></img>
      </div>
      <div className=" flex flex-col  gap-2 xl:gap-3 ">
        <span className="uppercase font-clashSemi text-white xl:text-lg">
          What's included
        </span>
        <ul className="text-white  xl:text-lg">
          {list.map((desc,idx) => {
            return (
              <li key={idx} className="flex items-start justify-start">
                <span className="pb-1 pr-2 text-white font-bold text-[20px] leading-none">
                  •
                </span>
                <span className="font-clashMeduim font-semibold tracking-widest ">
                  {desc}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default WorkSectionCard;
