'use client'
import Image from "next/image";

import { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStateContext } from "@/context/GlobalState";
import MiniShoppingCart from "./MiniShoppingCart";


const ShoppingCart = () => {
    const[showShoppingCart,setShowShoppingCart]=useState(false);
    const[sum,setSum]=useState(0);
    let{globalState,setGlobalState}=useContext(GlobalStateContext);
    const grivnaSymbol = "\u20B4";
    const router = useRouter();
    const blockRef = useRef(null);
    useEffect(() => { 
        let totalSum = 0;
        globalState.shoppingCartArr.forEach((element) => {
          totalSum += element.price;
        });
        setSum(totalSum);
      }, [globalState.shoppingCartArr]);
    useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

    
    const handleClickOutside = (event) => {
    if (blockRef.current && !blockRef.current.contains(event.target)) {
        setShowShoppingCart(false)
    }
    };
    
    function RemoveFromtheShoppingCart(id){
        setGlobalState((prevCart) => {
            const updatedCart = prevCart.shoppingCartArr.filter((item) => item.id !== id);
            return {
              ...prevCart,
              shoppingCartArr: updatedCart
            };
          });     
    }  
    function plusValueShoppingCartItem(index) {
        setGlobalState((prevCart)=>{
            const updatedCart = [...prevCart.shoppingCartArr];
            updatedCart[index] = {
                ...updatedCart[index],
                price: updatedCart[index].standartPrice + updatedCart[index].price  
                 ,
                amount: updatedCart[index].amount + updatedCart[index].initialAmount
            };
            return {
                ...prevCart,
                shoppingCartArr: updatedCart
                };
        })
    }  
    function minusValueShoppingCartItem(index) {
        setGlobalState((prevCart)=>{
            const updatedCart = [...prevCart.shoppingCartArr]; 
            if(updatedCart[index].amount !== updatedCart[index].initialAmount){
                updatedCart[index] = {
                    ...updatedCart[index],
                    price:  updatedCart[index].price - updatedCart[index].standartPrice ,
                    amount: updatedCart[index].amount - updatedCart[index].initialAmount
                };
            }
            return {
                ...prevCart,
                shoppingCartArr: updatedCart
                };
        })
    }
    
    return(
        <div className="flex items-center h-full " ref={blockRef}>
            <div className={`relative flex items-center w-[50px] h-full ml-auto mr-0  cursor-pointer`} onClick={()=> setShowShoppingCart(!showShoppingCart)}>
                <Image src={'/shopping-cart.svg'} width={35} height={35} alt="Shopping Cart"/>
                <div className="absolute bottom-[13px] left-[-5px] w-5 h-5 rounded-[100%] bg-[#0E8388] text-[white] text-[14px] font-semibold flex justify-center items-center">{globalState.shoppingCartArr.length}</div>
            </div>
            
            <AnimatePresence>
            {showShoppingCart &&
                <motion.div className="z-10 mt-[75px]   w-96 max-md:w-full max-md:border-0 min-h-[100px]   absolute right-0 top-0 shadow-xl bg-white  text-[black] border-b-2 border-l-2 border-[grey] max-md:h-screen">
                    <button className=" cancel_button w-[20px] h-[20px] absolute left-[10px] top-[10px] max-md:hidden" onClick={()=>setShowShoppingCart(!showShoppingCart)}>
                                        <Image
                                            src='/back-button.svg'
                                            alt="Back"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                    {
                        <ul className=" py-10 px-4 max-h-96 flex flex-col gap-3 overflow-x-hidden overflow-y-scroll max-md:h-4/6  ">
                            {globalState.shoppingCartArr.length === 0 && <p className=" flex justify-center items-center">Поки тут пусто ...</p>}
                            {globalState.shoppingCartArr && globalState.shoppingCartArr.map((item,index)=>{
                                return(
                                    <li key={Math.random()} className="w-full h-28 flex  justify-between items-center gap-1  pr-2 border-b-[1px] border-[grey]">
                                        <Image className="" src={item.img} width={100} height={50} alt={item.title}/>
                                        <div className="flex flex-col items-center grow relative    justify-center overflow-x-hidden">
                                            <h6 className=" text-[15px] truncate   w-full    ">{item.title}</h6>
                                            <p className=" font-medium text-left w-full">{item.amount}  <span className=" font-normal text-[13px]">{item.category === 'tea' ? 'г' : 'шт'}</span></p>
                                            <p className=" font-medium text-left w-full">{item.price}<span className=" font-normal text-[13px]">  {grivnaSymbol}</span></p>
                                            <div className="w-[80px] absolute top-[30px] left-[70px] flex justify-around rounded border-[1px] border-solid border-[grey]">
                                                <button className=" border-r-[1px] border-[grey] grow hover:bg-[#0E8388]"  onClick={()=> plusValueShoppingCartItem(index)}>+</button>
                                                <button className="grow hover:bg-[#0E8388]" onClick={()=> minusValueShoppingCartItem(index)}>-</button>
                                            </div>
                                        </div>
                                            <button className=" shrink-0" onClick={()=>RemoveFromtheShoppingCart(item.id)}><Image src='/cancel-item.svg' alt="Cancel product" width={20} height={20}/></button>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                    {globalState.shoppingCartArr.length !== 0 &&
                        <div className=" py-4 px-3 max-md:fixed max-md:bottom-[10px] max-md:w-full">
                            <div className=" min-[650px]:px-2 flex justify-between ">Загальна сумма : <span className=" font-semibold">{grivnaSymbol} {sum}</span></div>
                            <button onClick={()=>{ router.push('/order'); setShowShoppingCart(false)}} className=" w-5/6 h-12 mt-5 mx-auto flex justify-center items-center text-[19px] text-white opacity-80 hover:opacity-100 rounded-[10px] font-semibold bg-[#0E8388]"><span>Придбати</span></button>
                        </div>
                    
                    }
                    
                </motion.div>
            }
            </AnimatePresence>
            <MiniShoppingCart/>

            
        </div>       
    )
}

export default ShoppingCart;