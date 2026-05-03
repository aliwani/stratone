import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const {pathname,hash} = useLocation()
    useEffect(() => {
      if(hash){
        let element = document.querySelector(hash)
         if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start", // top align of section
          });
        }, 0);
      }
      }
      else{

        window.scrollTo({
          top:0,
          left:0,
          behavior:"auto"
        });
      }
    }, [pathname,hash])
    
  return null
}

export default ScrollToTop
