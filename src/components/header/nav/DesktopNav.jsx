'use client';

import Link from "next/link";
import {  useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import './nav.css';
import { usePathname } from 'next/navigation'

const DesktopNav = () =>{
    const pathname = usePathname()
    const[pageNow,setPageNow]=useState(pathname);

    function activateNav(e){
        let target = e.target;
        setPageNow(target.pathname) 
    }
     
    return(
        <nav className="nav max-[1000px]:hidden ">
            <LayoutGroup >
                <ul  className=" flex   justify-start items-center gap-2   font-medium text-[16px] text-center box-content ">
                    <li className="relative p-1 "   onClick={(e)=>{activateNav(e)}} ><Link  href='/' >Головна</Link>
                        {pageNow === '/' ? <motion.div layoutId="line"  className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                    <li  className="relative p-1 "  onClick={(e)=>{activateNav(e)}}><Link  href='/tea-shop'>Чай</Link>
                        {pageNow === '/tea-shop' ? <motion.div layoutId="line"  className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li> 
                    <li  className="relative p-1 " onClick={(e)=>{activateNav(e)}}><Link  href='/teaware-shop'>Посуд</Link>
                        {pageNow === '/teaware-shop' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                    <li  className="relative p-1" onClick={(e)=>{activateNav(e)}}><Link  href='/about-us'>О нас</Link>
                        {pageNow === '/about-us' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                
                    <li  className="relative p-1" onClick={(e)=>{activateNav(e)}}><Link  href='/delivery'>Доставка</Link>
                        {pageNow === '/delivery' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                    <li  className="relative p-1" onClick={(e)=>{activateNav(e)}}><Link  href='/blog'>Блог</Link>
                        {pageNow === '/blog' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>   
                </ul>
            </LayoutGroup>    
        </nav>
    )
}

export default DesktopNav;
