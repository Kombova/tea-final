'use client'
import Image from "next/image";
import Link from "next/link";
import ControleCard from "./ControleCard";
import { useState } from "react";

const ProductCard = ({product}) =>{
   const[price,setPrice]=useState(+product.fields.price)
    return(  
        <li  className="w-[290px] h-[462px] rounded-[15px] shadow-2xl overflow-none" style={{ boxShadow: '2px 2px 7px rgba(34, 31, 31, 0.4)' }}>
            <div className="w-full h-48 relative rounded-t-[15px] object-cover">
                <Link href={'/'}>
                    <Image className=" rounded-t-[15px]" src={`http:${product.fields.mainImg.fields.file.url}`} fill={true} alt={product.fields.title}/>
                </Link>
            </div>
            <div className="px-[10px]">
                <h3 className=" text-center text-[20px] font-medium">{product.fields.title}</h3>
                <h4 className="text-center">{product.fields.category.fields.type}</h4> 
                <p className="w-full mt-5 flex justify-between font-normal color-[#001011]">Ціна :<span className="text-[20px] font-semibold color-[#001011] ">{price}</span></p>
                
                <ControleCard step={product.fields.category.fields.step} setPrice={setPrice} initialPrice={+product.fields.price}/>
                <button className=" w-full h-12 mt-5 flex justify-center gap-3 items-center text-[19px] text-white rounded-[10px] font-semibold bg-[#0E8388]"><span>В кошик</span><Image src='little-cart.svg' width={30} height={30} alt='Shopping cart' /></button>
            </div>
            
        </li>    
    )
}

export default ProductCard;