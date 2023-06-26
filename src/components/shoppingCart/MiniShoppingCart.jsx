'use client';
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { GlobalStateContext } from "@/context/GlobalState";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
const MiniShoppingCart = () =>{
    let{globalState}=useContext(GlobalStateContext);
    const[showMiniShoppingCart,setShowMiniShoppingCart]=useState(false);
    useEffect(()=>{
        if(globalState.shoppingCartArr.length > 0){
            setShowMiniShoppingCart(true);
        setTimeout(() => {
            setShowMiniShoppingCart(false)
        }, 1000);
        }
        
    },[globalState.shoppingCartArr.length])
    const grivnaSymbol = "\u20B4";
   
    return(
        <>
            
            <AnimatePresence>    
                { showMiniShoppingCart &&
                
                    <ul className="mt-[75px] w-96  absolute top-0 right-0        py-1 px-2 flex flex-col gap-1 overflow-x-hidden overflow-y-auto max-md:h-4/6">
                        {globalState.shoppingCartArr.map((item,index)=>{
                            return(
                                <motion.li key={Math.random()} className="w-full p-1  flex  justify-between items-center gap-1  pr-2 border-[1px] bg-slate-100 border-[grey] rounded"
                                    initial={{translateX:'100%' }}
                                    animate={{translateX:'0%',overflow: 'none'}}
                                    transition={{duration:0.5}}
                                    exit={{opacity:0}}
                                    
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
            </AnimatePresence>
                
            
        </>
        
        
    )
}

export default MiniShoppingCart;