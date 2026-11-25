import React from "react";

function OurServiceCard() {
  return (
    <article className="h-full w-full bg-white p-0.5">
      <div className="flex h-full flex-col gap-5 rounded-md bg-[#111111] p-5 text-white">
        <img
          src={img}
          alt={`${title} by Stratone Studio`}
          loading="lazy"
          className="h-48 w-full rounded-md object-cover"
        />

        <div className="flex items-start gap-3">
          <span className="pt-1 font-clashRegular text-[16px] text-[#dbd9d9]">
            {num}
          </span>
          <h2 className="font-antonSC text-[28px] uppercase leading-none text-wrap md:text-[32px]">
            {title}
          </h2>
        </div>

        <p className="font-clashRegular text-[16px] leading-snug tracking-wide text-[#dbd9d9]">
          {desc}
        </p>

        <ul className="flex flex-col gap-1.5">
          {list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 font-clashMeduim text-[16px] tracking-wide"
            >
              <span aria-hidden="true" className="leading-snug">
                •
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* mt-auto pins the tools to the bottom so all cards line up */}
        <ul
          aria-label="Tools we use"
          className="mt-auto flex flex-wrap gap-2 pt-2"
        >
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-sm bg-[#202020] px-2.5 py-1 font-clashSemi text-[13px] uppercase tracking-wider text-white"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default OurServiceCard;
