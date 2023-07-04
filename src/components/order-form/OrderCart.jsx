'use client'
import Image from "next/image";
import { useContext } from "react";
import { GlobalStateContext } from "@/context/GlobalState";
const OrderCart = () =>{
    let{globalState}=useContext(GlobalStateContext);
    const grivnaSymbol = "\u20B4";
    let sum = 0;
    return(
        <div>
            <ul className="px-2 flex flex-col gap-2 max-w-[400px] max-[950px]:w-full">
            {globalState.shoppingCartArr.map((item)=>{
                sum += item.price;
                return(
                    <li className="flex justify-start gap-2 border-b-[1px] border-[grey] py-2" key={Math.random()}>
                        <div className="w-[60px] h-[30px]"><Image  src={item.img} width={50} height={30} alt={item.title}/></div>
                        <h2 className=" grow truncate">{item.title}</h2>
                        <p className="">{item.amount} <span className=" font-normal text-[13px]">{item.category === 'tea' ? 'грам' : 'шт'}</span></p>
                        <p className=" font-medium text-left w-full max-[950px]:w-[100px]">{item.price}<span className=" font-normal text-[13px]">  {grivnaSymbol}</span></p>

                    </li>
                    )
                })}
            </ul>
            <div className="mt-4 px-2 w-full flex justify-between max-sm:justify-center">Загальна сумма : <span className=" font-semibold border-b-2 border-solid border-black">{grivnaSymbol} {sum}</span></div>
        </div>
        
    )
}

export default OrderCart;