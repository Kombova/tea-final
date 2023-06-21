'use client'
import Image from "next/image";
import cartStore from "@/stores/cart-store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ShoppingCart = observer(() => {
    const[showShoppingCart,setShowShoppingCart]=useState(false);
    const {shoppingCartCount,shoppingCartArr,removeProduct} = cartStore;
    
    
    return(
        <div className="flex  items-center h-full">
            <div className={`relative flex items-center w-[50px] h-full ml-auto mr-0 ${showShoppingCart ? 'bg-slate-200' : null} cursor-pointer`} onClick={()=> setShowShoppingCart(!showShoppingCart)}>
                <Image src={'/shopping-cart.svg'} width={44} height={44} alt="Shopping Cart"/>
                <div className="absolute bottom-[3px] left-[-10px] w-7 h-7 rounded-[100%] bg-[#0E8388] text-[white] text-[18px] font-semibold flex justify-center items-center">{shoppingCartCount}</div>
            </div>

            <AnimatePresence>
            {showShoppingCart &&
                <motion.div className=" mt-[75px]  w-96 min-h-[100px] absolute right-0 top-0 shadow-xl bg-slate-200 text-[black] ">
                    <button className=" cancel_button w-[20px] h-[20px] absolute left-[10px] top-[10px]" onClick={()=>setShowShoppingCart(!showShoppingCart)}>
                                        <Image
                                            src='/back-button.svg'
                                            alt="Back"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                    {
                        <ul className=" py-10 px-4 flex flex-col gap-3 overflow-x-hidden">
                            {shoppingCartCount === 0 && <p className=" flex justify-center items-center">Поки тут пусто ...</p>}
                            {shoppingCartArr && shoppingCartArr.map((item,index)=>{
                                return(
                                    <li key={Math.random()} className="flex  justify-between bg-slate-300  rounded-[10px] pr-2 ">
                                        <Image className=" rounded-l-[10px]" src={`http:${item.img}`} width={100} height={80} alt={item.title}/>
                                        <div className="flex flex-col items-center    justify-center overflow-hidden">
                                            <h6 className=" text-[20px] font-semibold truncate w-[210px]">{item.title}</h6>
                                            <p className=" font-medium text-left w-full">{item.amount}  <span className=" font-normal text-[13px]">{item.category === 'tea' ? 'грам' : 'шт'}</span></p>
                                            <p className=" font-medium text-left w-full">{item.price}<span className=" font-normal text-[13px]">  грн</span></p>
                                        </div>
                                            <button onClick={()=>removeProduct(index)}><Image src='/cancel.svg' alt="Cancel product" width={20} height={20}/></button>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </motion.div>
            }
            </AnimatePresence>
            
        </div>
        

        

        
    )
})

export default ShoppingCart;