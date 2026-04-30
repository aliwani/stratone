import React from "react";
import ChooseSmallSingle from "./ChooseSmallSingle";
import featuresData from "@/data/chooseus";
function ChooseSmallCard() {
  return (
    <div className="xl:h-full w-full  md:h-[570x]  col-span-2 xl:col-span-1 order-3 md:order-2 xl:order-3 flex flex-col gap-0.5  ">
      {
        featuresData.map((data,idx)=>{
          return <ChooseSmallSingle key={data.id} title={data.title} desc={data.desc} />
        })
      }
   
    </div>
  );
}

export default ChooseSmallCard;
