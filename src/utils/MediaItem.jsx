export const isVideo = (src) => /\.(mp4|webm|ogg|mov)$/i.test(src);
export const MediaItem = ({ src, className }) =>
  isVideo(src) ? (
    <video
      src={src}
      type="video/mp4"
      autoPlay
      loop
      playsInline
      webkit-playsinline="true"
      disablePictureInPicture
      controls={true}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      className={className}
    />
  ) : (
    <img src={src} className={className} alt="error" />
  );
