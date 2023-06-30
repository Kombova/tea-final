'use client'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "@/context/GlobalState";
import ShowCategories from "../categories/ShowCategories";

const TeaShop = ({productsArr}) =>{
    const[showTea,setShowTea] = useState('Усі')
    let{globalState}=useContext(GlobalStateContext)
    useEffect(()=>{
        setShowTea(globalState.selectedMenu)
    },[globalState.selectedMenu])
    return(
         
            <div className={` mt-10  flex ${showTea === 'Усі' ? 'justify-between' : 'justify-start'} gap-4 `}>
                <ul className="flex flex-col items-center justify-center gap-1 shrink-0 basis-72 h-fit py-4 border-y-[1px] border-solid border-[grey] text-[18px] max-[920px]:hidden ">
                    <button className={`w-full text-center ${showTea === 'Усі' ? 'bg-[#0E8388] bg-opacity-80 text-white'  : 'hover:bg-[#0E8388] hover:bg-opacity-20'}`} value={'All'} onClick={(e)=>setShowTea(e.target.value)}>Усі</button>
                    <button className={`w-full text-center ${showTea === 'Шу Пуер' ? 'bg-[#0E8388] bg-opacity-80 text-white'  : 'hover:bg-[#0E8388] hover:bg-opacity-20'}`} value={'Шу Пуер'} onClick={(e)=>setShowTea(e.target.value)}>Шу Пуер</button>
                    <button className={`w-full text-center ${showTea === 'Шен Пуер' ? 'bg-[#0E8388] bg-opacity-80 text-white'  : 'hover:bg-[#0E8388] hover:bg-opacity-20'}`} value={'Шен Пуер'} onClick={(e)=>setShowTea(e.target.value)}>Шен Пуер</button>
                    <button className={`w-full text-center ${showTea === 'Червоний' ? 'bg-[#0E8388] bg-opacity-80 text-white'  : 'hover:bg-[#0E8388] hover:bg-opacity-20'}`} value={'Червоний'} onClick={(e)=>setShowTea(e.target.value)}>Червоний</button>
                    <button className={`w-full text-center ${showTea === 'Улун' ? 'bg-[#0E8388] bg-opacity-80 text-white'  : 'hover:bg-[#0E8388] hover:bg-opacity-20'}`} value={'Улун'} onClick={(e)=>setShowTea(e.target.value)}>Улун</button>
                </ul>
                <ul className="flex  justify-end gap-4 flex-wrap px-2 max-[920px]:justify-evenly">
                    <ShowCategories productsArr={productsArr} category="tea" type={showTea}/>
                </ul>
            </div>
            
      
        
    )
}

export default TeaShop;