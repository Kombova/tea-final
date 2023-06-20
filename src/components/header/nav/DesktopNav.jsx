'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import './nav.css';
import { usePathname } from 'next/navigation'
 


const DesktopNav = ({fetchLogo}) =>{
    const pathname = usePathname()
    const[pageNow,setPageNow]=useState(pathname);

    function activateNav(e){
        let target = e.target;
        setPageNow(target.pathname) 
    }
    
   
   
    return(
        <nav className="nav max-[1000px]:hidden ">
            <LayoutGroup >
                <ul  className=" flex   justify-start items-center gap-1   font-medium text-[18px] text-center box-content ">
                    <li className="relative "   onClick={(e)=>{activateNav(e)}} ><Link href='/' >Головна</Link>
                        {pageNow === '/' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    {/* <li  className="relative" onClick={(e)=>{activateNav(e)}}><Link href='/shop'>Магазин</Link>
                        {pageNow === '/shop' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li> */}
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/about-us'>О нас</Link>
                        {pageNow === '/about-us' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                {/* <li className="w-[120px] h-[65px] z-10"><Link href={'/'}><Image src={`http:${fetchLogo}`} fill={true} alt="Logo"/></Link></li> */}
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/delivery'>Доставка</Link>
                        {pageNow === '/delivery' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    <li  onClick={(e)=>{activateNav(e)}}><Link href='/blog'>Блог</Link>
                        {pageNow === '/blog' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute"></motion.div> : null}
                    </li>
                    
                </ul>
            </LayoutGroup>    
        </nav>
    )
}

export default DesktopNav;
