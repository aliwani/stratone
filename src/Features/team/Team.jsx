import React, { useRef, useState } from "react";

function Team() {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {error && <p className="text-red-500">{error}</p>}
      
      <video
        ref={videoRef}
        controls
        src="/video/tester.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => {
          console.error("Video error:", e.target.error);
          setError(`Error: ${e.target.error?.message || 'Unknown'}`);
        }}
        onLoadedData={() => console.log("Video loaded successfully")}
      />
    </div>
  );
}

export default Team;