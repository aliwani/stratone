const windowResize = () => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
};
const handleResize = () => {
    let windowSize = window.innerWidth;
  return (windowSize = window.innerWidth);
};
export default windowResize;