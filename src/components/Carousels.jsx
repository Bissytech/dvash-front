import React, {useState, useEffect } from 'react'

import './Carousel.css';
import { IoIosArrowForward,  IoIosArrowBack }from "react-icons/io";


export const Carousels = ({data}) => {
 const [slide, setSlide] = useState(0);
 const nextSlide = ()=>{

if (slide === data.length-1 ) {
  setSlide(0)
} else{setSlide(slide + 1)}
 }
 const prevSlide =()=>{
if (slide === 0) {
  setSlide(data.length-1)
}else{setSlide(slide-1)}
 }
//  this will be made active later, doing this to avoid distration

 useEffect(() => {
  const interval = setInterval(() => {
 
    if (slide === data.length-1 ) {
      setSlide(0)
    } else{setSlide(slide + 1);
      return slide;
      
    }
  
   }, 5000);
   return () => clearInterval(interval); 
}, [slide,data.length]);


return (
  
  <div className='carousel'>
  <IoIosArrowBack onClick={prevSlide} className='arrow arrow-back' />
  {data.map((item, index) => (
    <div
      key={index}
      className={slide === index ? 'slide' : 'slide slide-hidden'}
    >
      <img src={item.src} alt={item.alt} />
    </div>
  ))}
  <IoIosArrowForward onClick={nextSlide} className='arrow arrow-forward' />
  <span className='indicators'>
    {data.map((_, i) => (
      <button
        key={i}
        className={slide === i ? 'indicator' : 'indicator indicator-inactive'}
        onClick={() => setSlide(i)}
      ></button>
    ))}
  </span>
</div>
)

}
