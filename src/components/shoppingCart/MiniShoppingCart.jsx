'use client';
import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { GlobalStateContext } from "@/context/GlobalState";
import { AnimatePresence, motion } from "framer-motion";

let counterShoppingArr = 0;
const MiniShoppingCart = () =>{
    let{globalState}=useContext(GlobalStateContext);
    const[showMiniShoppingCart,setShowMiniShoppingCart]=useState(false);
    useEffect(()=>{
        if(globalState.shoppingCartArr.length > 0 && globalState.shoppingCartArr.length > counterShoppingArr){   
            setShowMiniShoppingCart(true);
        }
        counterShoppingArr = globalState.shoppingCartArr.length
        const timer = setTimeout(() => {
            setShowMiniShoppingCart(false)
        }, 2000); 
        return () =>clearTimeout(timer);  
    },[globalState.shoppingCartArr.length])
   

    const grivnaSymbol = "\u20B4";
    let isMobileDevice;
    typeof window !== 'undefined' ?  isMobileDevice = window.innerWidth <= 768 : null
    const lastItem = globalState.shoppingCartArr.length - 1;
    
   
    return(
        <>
            
            <AnimatePresence>    
                { showMiniShoppingCart && !isMobileDevice &&
                
                    <ul className="mt-[75px] w-96  absolute top-0 right-0   py-1 px-2 flex flex-col gap-1 overflow-x-hidden">
                        {globalState.shoppingCartArr.map((item,index)=>{
                                    return(
                                        <motion.li  key={Math.random()} className="w-full p-1  flex  justify-between items-center gap-1  pr-2 border-[1px] bg-slate-100 border-[grey] rounded"
                                        initial={{translateX:'100%' }}
                                        animate={{translateX:'0%',overflow: 'none'}}
                                        transition={{duration:0.5}}
                                        exit={{opacity:0,translateX:'100%'}}
                                        
                                    >
                                        <Image className="" src={item.img} width={50} height={25} alt={item.title}/>
                                        <div className="flex justify-between items-center grow relative overflow-hidden">
                                            <h6 className=" text-[15px] truncate   w-full    ">{item.title}</h6>
                                        </div>
                                    </motion.li>
                                    )   
                            
                        })
                        }
                    </ul>
               
                }
                { showMiniShoppingCart && isMobileDevice &&
                    <ul className="mt-[75px] w-full  absolute top-0 right-0   py-1 px-2 flex flex-col gap-1 overflow-x-hidden">
                        <motion.li key={Math.random()} className="w-full p-1  flex  justify-between items-center gap-1  pr-2 border-[1px] bg-slate-100 border-[grey] rounded"
                        initial={{translateX:'100%' }}
                        animate={{translateX:'0%',overflow: 'none'}}
                        transition={{duration:0.5}}
                        exit={{opacity:0}}     
                        >
                        <Image className="" src={globalState.shoppingCartArr[lastItem].img} width={50} height={25} alt={globalState.shoppingCartArr[lastItem].title}/>
                        <div className="flex justify-between items-center grow relative overflow-hidden">
                            <h6 className=" text-[15px] truncate   w-full    ">{globalState.shoppingCartArr[lastItem].title}</h6>
                        </div>
                    </motion.li>
                    </ul>
                
                }
            </AnimatePresence>
                
            
        </>
        
        
    )
}

export default MiniShoppingCart;