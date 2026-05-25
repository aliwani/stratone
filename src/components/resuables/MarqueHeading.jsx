function MarqueeHeading({ project }) {
  const items = [...Array(6)].map((_, i) => (
    <span
      key={i}
      className="font-antonSC text-[clamp(2rem,8vw,8rem)] uppercase tracking-wider text-white shrink-0"
    >
      {project.title}
      <span className="text-white px-10">✦</span>
    </span>
  ));

  return (
    <div className="w-full overflow-hidden whitespace-nowrap group">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex;
          width: max-content;
          animation: marquee 50s linear infinite;
          will-change: transform;
        }
      
      `}</style>
      <div className="marquee-track">
        {items}
        {items}
      </div>
    </div>
  );
}

export default MarqueeHeading;
