'use client'
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";


    

const PhoneNav = () =>{
    const[viewNav,setViewNav]=useState(false);
    
    function clickOnButton(){
            setViewNav(false)
    }

    return(
        <nav className="nav  min-[1000px]:hidden ">
            <div className="burger_nav w-[50px] h-[50px] border-solid rounded-[10px] inline-flex justify-center items-center py-[10px] flex-wrap "  onClick={()=>clickOnButton()}>
                    <span className="w-[80%] h-[2px] block bg-black"></span>
                    <span className="w-[80%] h-[2px] block bg-black"></span>
                    <span className="w-[80%] h-[2px] block bg-black"></span>
                </div>
                
                <AnimatePresence>
                    {
                        viewNav &&
                            <>
                                <motion.div 
                                    className={` phone_nav w-[90%] z-50 h-screen absolute  left-0 top-0 py-[30px] pt-[60px] bg-slate-200   text-[25px] `}
                                    initial={{translateX:'-100%' }}
                                    animate={{translateX:'0%',overflow: 'none'}}
                                    exit={{translateX:'-100%'}}
                                    transition={{duration:0.5}}
                                    >
                                    
                                    <ul className=" flex flex-col p-5">
                                        <li className="  border-b-2 border-solid border-black pb-2 " onClick={()=>clickOnButton()}><Link className="w-full" href={'/'}>Головна</Link></li>
                                        <li className="  border-b-2 border-solid border-black pb-2" onClick={()=>clickOnButton()}><Link href={'/tea-shop'}>Чай</Link></li>
                                        <li className="  border-b-2 border-solid border-black pb-2" onClick={()=>clickOnButton()}><Link href={'/teaware-shop'}>Посуд</Link></li>
                                        <li className="  border-b-2 border-solid border-black pb-2" onClick={()=>clickOnButton()}><Link href={'/about-us'}>Про нас</Link></li>
                                        <li className="   border-b-2 border-solid border-black pb-2" onClick={()=>clickOnButton()}><Link href={'/delivery'}>Доставка</Link></li>    
                                        <li className="   border-b-2 border-solid border-black pb-2" onClick={()=>clickOnButton()}><Link href={'/'}>Блог</Link></li>
                                    </ul>
                                                  
                                    <button className=" cancel_button w-[20px] h-[20px] absolute right-[20px] top-[20px]" onClick={()=>clickOnButton()}>
                                        <Image
                                            src='/back-button.svg'
                                            alt="Back"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                    
                                </motion.div>
                                <div className='w-full h-screen absolute top-0 left-0 z-10 opacity-50 bg-black'/>
                            </>
                        
                    }    
                </AnimatePresence>

        </nav>
    )
}

export default PhoneNav;