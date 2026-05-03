
function Navbar({isOpen, setIsOpen}) {
 console.log(isOpen);
 
  return (
    <div className='fixed z-99 top-0 w-full h-25 flex justify-between items-center px-5 md:px-7.5 xl:px-10   '>
      <div className='font-antonSC text-white text-3xl'>
       <a href="/"> Stratone </a>
      </div>
      <div onClick={()=> !isOpen ? setIsOpen(true) : setIsOpen(false)} className='cursor-pointer flex items-center justify-center p-0.5  bg-white  h-8 w-16 md:h-9.75 md:w-18  ' >
        <span className='hover:rounded-none duration-400 transition-all bg-black font-clashRegular w-full flex items-center justify-center h-full font-semibold tracking-wider rounded-sm  text-sm md:text-[16px] text-white' >{isOpen ? "CLOSE" : "MENU"}</span>
      </div>

    </div>
  )
}

export default Navbar
