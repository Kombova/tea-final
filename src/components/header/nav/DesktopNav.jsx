'use client';

import Link from "next/link";
import Image from "next/image";
import {  useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "@/context/GlobalState";
import { LayoutGroup, motion } from "framer-motion";
import './nav.css';
import { usePathname } from 'next/navigation'

const DesktopNav = () =>{
    const pathname = usePathname()
    const[pageNow,setPageNow]=useState(pathname);
    let{setGlobalState}=useContext(GlobalStateContext)
    function activateNav(e){
        let target = e.target;
        setPageNow(target.pathname) 
    }
    function clickCategory(e){
        setGlobalState((prevState) => ({
            ...prevState,
            selectedMenu: e.target.innerText,
        }));
    }
     
    return(
        <nav className="nav max-[1000px]:hidden">
            <LayoutGroup >
                <ul  className=" flex   justify-start items-center gap-2    text-[20px] font-medium text-center box-content ">
                    <li className="relative p-1 "   onClick={(e)=>{activateNav(e)}} ><Link  href='/' >Головна</Link>
                        {pageNow === '/' ? <motion.div layoutId="line"  className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                    <li  className="relative p-1 group hover:h-[75px] flex hover:items-center "  onClick={(e)=>{activateNav(e)}}><Link  href='/tea-shop'>Чай</Link>
                        
                            <ul className="w-[200px] hidden group-hover:block position absolute top-[75px] left-[-80px] bg-white z-10 py-2 border-b-[1px]  border-[grey] text-[16px] ">
                                <li className=" hover:bg-[#0E8388] hover:text-white" onClick={(e)=>clickCategory(e)}><Link href='/tea-shop'>Шу Пуер</Link></li>
                                <li className=" hover:bg-[#0E8388] hover:text-white" onClick={(e)=>clickCategory(e)}><Link href='/tea-shop'>Шен Пуер</Link></li>
                                <li className=" hover:bg-[#0E8388] hover:text-white" onClick={(e)=>clickCategory(e)}><Link href='/tea-shop'>Червоний</Link></li>
                                <li className=" hover:bg-[#0E8388] hover:text-white" onClick={(e)=>clickCategory(e)}><Link href='/tea-shop'>Улун</Link></li>
                            </ul>
                        {pageNow === '/tea-shop' ? <motion.div layoutId="line"  className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li> 
                    <li  className="relative p-1 " onClick={(e)=>{activateNav(e)}}><Link  href='/teaware-shop'>Посуд</Link>
                        {pageNow === '/teaware-shop' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
                    </li>
                    <li  className="relative p-1" onClick={(e)=>{activateNav(e)}}><Link  href='/about-us'>О нас</Link>
                        {pageNow === '/about-us' ? <motion.div layoutId="line" className="w-full h-[4px] bg-[#0E8388] rounded-[10px] absolute left-0 bottom-0"></motion.div> : null}
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
