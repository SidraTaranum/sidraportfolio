import React,{useEffect} from 'react'
import  locomotiveScroll from 'locomotive-scroll'
const useLocoScroll = (start) => {
useEffect(() => {
   if(!start) return;
   const scrollEle = document.querySelector('#MAIN');

   const locoScroll = new locomotiveScroll({
         el:scrollEle,
         smooth:true,
         multiplier:1,
         class:'is-reveal'
         
   })
}, [start])
}

export default useLocoScroll
