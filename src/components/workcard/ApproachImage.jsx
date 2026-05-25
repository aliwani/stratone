import React from "react";

function ApproachImage({ project }) {
  return (
    <div className="w-full h-fit p-0.5 bg-white">
      
        <img
          className="w-fit h-fit cover rounded-2xl"
          src={project.BottomSrc}
          alt=""
        />
      
    </div>
  );
}

export default ApproachImage;
