import React from "react";
import ChooseSmallSingle from "./ChooseSmallSingle";

function ChooseSmallCard() {
  return (
    <div className="xl:h-full w-full  md:h-[570x]  col-span-2 xl:col-span-1 order-3 md:order-2 xl:order-3 flex flex-col gap-0.5  ">
      <ChooseSmallSingle />
      <ChooseSmallSingle />
      <ChooseSmallSingle />
    </div>
  );
}

export default ChooseSmallCard;
