import React from "react";

function OurApproach({ project }) {
  return (
    <div className="w-full max-w-180">
      <h2 className="font-antonSC text-white leading-none tracking-wider xl:text-[26px]">
        our approach
      </h2>
      <p className="font-clashRegular pt-5 text-white leading-tight tracking-wider xl:text-lg">
        {project.approach}
      </p>
      <ul className="px-4 list-disc font-clashRegular pt-5 text-white leading-tight tracking-wider xl:text-lg">
        {project.approachPoints.map((li, idx) => (
          <li key={idx}>{li}</li>
        ))}
      </ul>
    </div>
  );
}

export default OurApproach;
