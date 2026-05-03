function InfiniteScroll() {
  return (
    <div className="relative w-50 md:w-100 items-center justify-center overflow-hidden py-4 md:py-6 mt-5 mb-5 md:mt-15">
      
      {/* gradients */}
      <div className="absolute left-0 top-0 w-20 h-full overflow-hidden bg-linear-to-r from-[#111111] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full overflow-hidden bg-linear-to-l from-[#111111] to-transparent z-10" />

      <div className="flex w-max animate-scroll-right items-center  text-white">
        
        {/* ORIGINAL */}
        <div className="min-w-full flex items-center   justify-evenly gap-8  text-[22px]  xl:text-[clamp(20px,2vw,30px)] whitespace-nowrap  ">
          <span className="shrink-0">Ali</span>
          <span className="shrink-0">Wani</span>
          <span className="shrink-0">Dani</span>
          <span className="shrink-0">Rani</span>
         
        </div>

        {/* DUPLICATE */}
        <div className="min-w-full flex items-center  justify-evenly gap-8 text-[22px] xl:text-[clamp(20px,2vw,30px)] whitespace-nowrap  ">
          <span className="shrink-0">Ali</span>
          <span className="shrink-0">Wani</span>
          <span className="shrink-0">Dani</span>
          <span className="shrink-0">Rani</span>
 
        </div>

      </div>
    </div>
  );
}

export default InfiniteScroll;