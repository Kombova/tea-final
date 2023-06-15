'use client';

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import { swipeControle } from "@/logic/swipeControle";
let i = 0;
const Slider = ({array,sliderLinks}) =>{ 
    
    const[imgNow,setImgNow]=useState(array[i]);
    const[stateInterval,setStateInterval]=useState(true);

    useEffect(()=>{
        let intervalId = null;
        if(stateInterval){
            intervalId = setInterval(() => {
            
                if(i+1 === array.length){
                    i = 0;
                    setImgNow(array[i])
                  }else{
                    i++
                    setImgNow(array[i])
                  }
               
              }, 3000);
        }
        return () => clearInterval(intervalId);
     },[stateInterval])



    
    
    function setImg(e){
        setStateInterval(false)
        setTimeout(() => {
            setStateInterval(true)
        }, 3000);
        let diraction = e.target.value;
       if(diraction === 'right' && i+1 < array.length || swipeControle.swipe==='Left' &&  i+1 < array.length){
            i++
            setImgNow(array[i]);
       }else if(diraction === 'right' && i+1 === array.length || swipeControle.swipe==='Left' &&  i+1 === array.length){
            i=0;
            setImgNow(array[i]);
        }else if(diraction === 'left' && i != 0 || swipeControle.swipe==='Right' && i != 0){
            --i
            setImgNow(array[i]);
        }else if(diraction === 'left' && i === 0 || swipeControle.swipe==='Right' && i === 0){
            i= array.length - 1;
            setImgNow(array[i]);
        }
        
    }

    return(
        <div className=" w-full h-[500px]  relative overflow-hidden flex rounded-[10px]      max-[800px]:h-[300px] max-[800px]:w-screen  max-[800px]:rounded-none left-0">
            <AnimatePresence   >
                <motion.div
                    className="w-full h-full absolute"
                    key={imgNow}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{
                       
                        opacity: { duration: 0.5 }
                    }}
                    onTouchStart={(e)=>swipeControle.trackStartSwipe(e)} 
                    onTouchEnd={(e)=>{swipeControle.trackEndSwipe(e);setImg(e)}} 
                >
                    <Image
                        src={`http:${imgNow}`}
                        alt='Slider Photo'
                        fill={true}
                        sizes="(max-width: 800px) 300px, 1280px"
                        className='object-cover' 
                        priority
                    />

                </motion.div>  
            </AnimatePresence>

{/* -------------------------Button controle------------------------------ */}
                    <label htmlFor="sliderLeft">
                        <Image
                            src={'/arrow-right.svg'}
                            alt='Slider Control'
                            width={50}
                            height={50}
                            className='object-cover rotate-180 absolute left-0 bottom-[50%] translate-y-[50%] cursor-pointer max-[800px]:hidden' 
                            priority    
                        />
                    </label>
                    <label htmlFor="sliderRight">
                        <Image
                            src={'/arrow-right.svg'}
                            alt='Slider Control'
                            width={50}
                            height={50}
                            className='object-cover absolute right-0 bottom-[50%] translate-y-[50%] cursor-pointer  max-[800px]:hidden' 
                            priority

                        />
                    </label>
                        <button id='sliderLeft' className="hidden" value={'left'} onClick={(e)=>setImg(e)}/>
                        <button id='sliderRight' className=" hidden" value={'right'} onClick={(e)=>setImg(e)}/>
                        <Image
                            src={'/slider/swipe.svg'}
                            alt='Slider Control'
                            width={30}
                            height={30}
                            className='object-cover z-10 absolute  left-[50%] bottom-1 translate-x-[-50%]  animate-spin opacity-50   min-[800px]:hidden' 
                            priority
                           
                            
                        />
        
        </div>
    )
}
export default Slider;