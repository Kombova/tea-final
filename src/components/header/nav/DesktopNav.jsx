'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import './nav.css';
const DesktopNav = () =>{
    const[pageNow,setPageNow]=useState('Головна')
    function activateNav(e){
        let target = e.target;
        setPageNow(target.innerText)   
    }

   
    return(
        <nav className="nav grow max-[720px]:hidden ">
            <LayoutGroup >
                <ul  className=" flex   justify-between items-center font-semibold text-[18px] text-center box-content ">
                    <li className="relative "   onClick={(e)=>{activateNav(e)}} ><Link href='/' >Головна</Link>
                        {pageNow === 'Головна' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    <li  className="relative" onClick={(e)=>{activateNav(e)}}><Link href='/shop'>Магазин</Link>
                        {pageNow === 'Магазин' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/about-us'>О нас</Link>
                        {pageNow === 'О нас' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                <li className="w-[100px] h-[70px] z-10"><Link href={'/'}><Image src={'/logo.svg'} fill={true} alt="Logo"/></Link></li>
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/delivery'>Доставка</Link>
                        {pageNow === 'Доставка' ? <motion.div layoutId="line2" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/'>Блог</Link>
                        {pageNow === 'Блог' ? <motion.div layoutId="line2" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    
                </ul>
            </LayoutGroup>    
        </nav>
    )
}

export default DesktopNav;
