'use client'
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { GlobalStateContext } from "@/context/GlobalState";


const ControleCard = ({step,setPrice,initialPrice,price,title,img,id,category,full}) =>{
    let startCount = !step ? 1 : step.length === 3 ? step[1] : step[0] ;
    const[count,setCount]=useState(+startCount);
    useEffect(()=>{
        if(step){
            let price = initialPrice / 1000;
            setPrice(()=>price * count)
        }
        
    })

    function clickPlus(){
        setCount((count)=>count + 1)
        setPrice(()=>initialPrice * (count+1))
    }
    function clickMinus(){
        setCount((count)=> count > 1 ? count - 1 : 1)
        setPrice(()=> count === 1 ? initialPrice : initialPrice * (count-1))
    }
    function clickSelect(e){
        let newCount = +e.target.value;
        setCount(newCount)
    }

    const{setGlobalState}=useContext(GlobalStateContext);

    function postToShoppingCart(title,img,amount,price,id,category){
        setGlobalState((prevCart)=>{
            const foundIndex = prevCart.shoppingCartArr.findIndex(element => element.id === id);
            if (foundIndex !== -1) {
                 const updatedCart = [...prevCart.shoppingCartArr];
            //     updatedCart[foundIndex] = {
            //       ...updatedCart[foundIndex],
            //       price: updatedCart[foundIndex].price + price,
            //       amount: updatedCart[foundIndex].amount + amount
            //     };
                 return {
                   ...prevCart,
                   shoppingCartArr: updatedCart
                 };
              }else{
                const updatedCart = [...prevCart.shoppingCartArr, {
                    title: title,
                    img: img,
                    amount: amount,
                    initialAmount : amount,
                    price: price,
                    standartPrice: price,
                    id: id,
                    category: category,
                    stepVariant : step,
                    
                }]
                
                return {
                    ...prevCart,
                    shoppingCartArr: updatedCart
                    }
                
              }
             
        })
    }

    return(
        <div className="flex opacity-80 justify-center gap-2 flex-wrap mt-5 ">
            {!step && <div className={`${full ? 'w-[300px]' : 'w-full'}  flex h-12 bg-black justify-between items-center rounded-[10px]`}>
                <button className="text-[40px] text-white text-center grow " onClick={()=>clickMinus()}>-</button>
                <div className="bg-white w-[130px] h-5/6 rounded-[10px] text-[20px] font-medium flex items-center justify-center gap-2 text-center ">{+count}<span>шт</span> </div>
                <button className="text-[40px] text-white text-center grow " onClick={()=>clickPlus()}>+</button>
            </div>}

            {step &&  <div className={`${full ? 'w-[300px]' : 'w-full'}  flex h-12 bg-black justify-evenly items-center text-white text-[16px] font-medium rounded-[10px]`}>
                {step.map((step)=>{
                        if(count === +step){
                            return <button key={Math.random()} className="bg-white text-black w-[85px] h-5/6 rounded-[10px]">{step} гр</button>
                        }else return <button key={Math.random()} className=" w-[85px]" onClick={(e)=> clickSelect(e)} value={step}>{step} гр</button>   
                    })
                }
                </div>     
            }
            <button className={`${full ? 'w-[300px]' : 'w-full'} h-12   flex justify-center gap-3 items-center text-[19px] text-white rounded-[10px] font-semibold bg-[#0E8388]`} onClick={()=> postToShoppingCart(title,img,count,price,id,category,step)}><span>В кошик</span><Image src='little-cart.svg' width={30} height={30} alt='Shopping cart' /></button>
        </div>
    )
}

export default ControleCard;