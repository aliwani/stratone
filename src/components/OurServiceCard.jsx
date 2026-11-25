import React from "react";

function OurServiceCard({data}) {
  const { id, num, title, img, list, desc, tools } = data;

  return (
    <article
    
      className="w-full bg-white p-0.5 h-full rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="w-full h-full bg-[#111111] rounded-2xl text-white flex flex-col">
        <img
          src={img}
          alt={`${title} service by Your Brand Name`}
          width={600}
          height={400}
          loading={id < 3 ? "eager" : "lazy"}
          decoding="async"
          className="w-full rounded-2xl h-80 object-cover"
          itemProp="image"
        />

        <div className="p-5 flex flex-col gap-4 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-antonSC uppercase tracking-wider font-semibold " itemProp="name">
              {title}
            </h2>
            <span className="text-sm font-clashSemi text-gray-400" aria-hidden="true">
              {num}
            </span>
          </div>

          <p className="text-sm md:text-xl font-clashRegular text-gray-300" itemProp="description">
            {desc}
          </p>

          <ul className="list-disc list-inside text-sm md:text-lg font-clashLight space-y-1">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ul
            className="flex flex-wrap gap-2 mt-auto pt-2"
            aria-label={`Tools used for ${title}`}
          >
            {tools.map((tool) => (
              <li
                key={tool}
                className="text-xs md:text-lg border font-clashRegular border-white/30 rounded-full px-3 py-1"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default OurServiceCard;
