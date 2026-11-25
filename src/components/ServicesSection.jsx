import React from "react";
import OurServiceCard from "./OurServiceCard";
import data from "../Features/services/data"
function ServicesSection() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15  px-5 md:px-7.5 xl:px-10 pb-20">
       {
        data.map((cardData,idx)=>{
            return <OurServiceCard data={cardData}/>

        })
       }
    </div>
  );
}

export default ServicesSection;
