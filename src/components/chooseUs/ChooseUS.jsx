import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import Header from "../resuables/Header";
import ChooseCard from "./ChooseCard";
import ChooseSmallCard from "./ChooseSmallCard";

function ChooseUS() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col gap-15 bg-black px-5 md:px-7.5 xl:px-10">
      <SectionHeader Num="[04]" Text="What Sets Us Apart" />
      <div className="w-full flex flex-col gap-8 md:gap-18 rounded-3xl">
        <Header heading="Why choose us" />
        <div className="grid grid-cols-2 xl:grid-cols-3 mb-20 gap-0.5 min-h-178.25 md:h-212 xl:h-185 w-full bg-white p-0.5">
          <ChooseCard />
          <ChooseCard />
          <ChooseSmallCard />
        </div>
      </div>
    </div>
  );
}

export default ChooseUS;
