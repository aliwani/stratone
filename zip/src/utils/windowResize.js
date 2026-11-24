const windowResize = () => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
};
const handleResize = () => {
  return window.innerWidth
};
export default windowResize;