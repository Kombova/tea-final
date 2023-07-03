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
            <ul className="flex flex-col gap-2 max-w-[400px] max-[950px]:w-full">
            {globalState.shoppingCartArr.map((item)=>{
                sum += item.price;
                return(
                    <li className="flex justify-start gap-2 border-b-[1px] border-[grey] py-2" key={Math.random()}>
                        <div className="w-[60px] h-[30px]"><Image  src={item.img} width={50} height={30} alt={item.title}/></div>
                        <h2 className="w-[400px] max-[950px]:w-full truncate">{item.title}</h2>
                        <p className="w-[200px] max-[950px]:w-[100px]">{item.amount} <span className=" font-normal text-[13px]">{item.category === 'tea' ? 'грам' : 'шт'}</span></p>
                        <p className=" font-medium text-left w-full">{item.price}<span className=" font-normal text-[13px]">  {grivnaSymbol}</span></p>

                    </li>
                    )
                })}
            </ul>
            <div className="mt-4 min-[650px]:px-2 flex justify-between ">Загальна сумма : <span className=" font-semibold border-b-2 border-solid border-black">{grivnaSymbol} {sum}</span></div>
        </div>
        
    )
}

export default OrderCart;