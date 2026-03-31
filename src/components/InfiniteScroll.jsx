function InfiniteScroll() {
  return (
    <div className="relative overflow-hidden   py-4 md:py-6 mt-15  ">
      <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-black to-transparent z-10" />
      <div className="flex w-max animate-scroll-right items-center text-white">
        {/* ORIGINAL */}
        <div className="min-w-full pr-12 flex items-center justify-between gap-8 md:gap-12 lg:gap-16 text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
          <span className="w-1/5">Ali</span>
          <span className="w-1/5">Wani</span>
          <span className="w-1/5">Dani</span>
          <span className="w-1/5">Rani</span>
          <span className="w-1/5">Tani</span>
        </div>

        {/* DUPLICATE */}
        <div className="min-w-full pr-12 flex items-center justify-between gap-8 md:gap-12 lg:gap-16 text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
          <span className="w-1/5">Ali</span>
          <span className="w-1/5">Wani</span>
          <span className="w-1/5">Dani</span>
          <span className="w-1/5">Rani</span>
          <span className="w-1/5">Tani</span>
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
