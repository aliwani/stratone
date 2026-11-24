
function Navbar({isOpen, setIsOpen}) {

  return (
    <nav aria-label="Main navigation" className='fixed z-99 top-0 w-full h-25 flex justify-between items-center px-5 md:px-7.5 xl:px-10   '>
      <div className='font-antonSC text-white text-3xl'>
       <a href="/" aria-label="Stratone Studio — Home"> Stratone </a>
      </div>
      <button
        onClick={()=> !isOpen ? setIsOpen(true) : setIsOpen(false)}
        aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className='cursor-pointer flex items-center justify-center p-0.5  bg-white  h-8 w-16 md:h-9.75 md:w-18  '
      >
        <span className={`${isOpen? "rounded-none" : "rounded-sm"} hover:rounded-none  duration-400 transition-all bg-black font-clashRegular w-full flex items-center justify-center h-full font-semibold tracking-wider   text-sm md:text-[16px] text-white`} >{isOpen ? "CLOSE" : "MENU"}</span>
      </button>

    </nav>
  )
}

export default Navbar
