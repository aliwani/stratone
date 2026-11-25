import { motion } from "framer-motion";

export const isVideo = (src) => /\.(mp4|webm|ogg|mov)$/i.test(src);
export const MediaItem = ({ src, className, alt = "" }) =>
  isVideo(src) ? (
    <motion.video
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      src={src}
      type="video/mp4"
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      disablePictureInPicture
      controls={false}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      className={className}
    />
  ) : (
    <motion.img
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      src={src}
      className={className}
      alt={alt}
    />
  );
