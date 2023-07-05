'use client'
import Image from "next/image";
import { useContext } from "react";
import { GlobalStateContext } from "@/context/GlobalState";
const OrderCart = () =>{
    let{globalState}=useContext(GlobalStateContext);
    const grivnaSymbol = "\u20B4";
    let sum = 0;
    return(
        <div className="w-[400px] max-md:w-full px-2">
            <ul className="flex flex-col gap-2">
            {globalState.shoppingCartArr.map((item)=>{
                sum += item.price;
                return(
                    <li className="w-full flex justify-start gap-2 border-b-[1px] border-[grey] py-2  max-sm:justify-between" key={Math.random()}>
                        <div className="w-[60px] h-[30px]"><Image  src={item.img} width={50} height={30} alt={item.title}/></div>
                        <h2 className=" grow truncate">{item.title}</h2>
                        <p className=" shrink-0">{item.amount} <span className=" font-normal text-[13px]">{item.category === 'tea' ? 'грам' : 'шт'}</span></p>
                        <p className=" font-medium text-left  shrink-0">{item.price}<span className=" font-normal text-[13px]">  {grivnaSymbol}</span></p>

                    </li>
                    )
                })}
            </ul>
            <div className="mt-4  w-full flex justify-between ">Загальна сумма : <span className=" font-semibold border-b-2 border-solid border-black">{grivnaSymbol} {sum}</span></div>
        </div>
        
    )
}

export default OrderCart;