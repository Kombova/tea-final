'use client'
import Image from "next/image";
import Link from "next/link";
import ControleCard from "./ControleCard";
import { useState,useRef } from "react";

const ProductCard = ({product}) =>{
   const[price,setPrice]=useState(+product.fields.price)
   const [image, setImage] = useState(`http:${product.fields.mainImg.fields.file.url}`);
   
   
   return(  
        <li  className="w-[290px] h-[462px] rounded-[15px] shadow-2xl overflow-none" style={{ boxShadow: '2px 2px 7px rgba(34, 31, 31, 0.4)' }}>
            <div className="w-full h-48 relative rounded-t-[15px] object-cover">
                <Link href={product.sys.id}>
                    <Image className=" rounded-t-[15px] top-0 left-0" src={image} fill={true} alt={product.fields.title}/>
                </Link>
            </div>
            <div className="px-[10px] mt-3">
                <h3 className=" text-center text-[20px] font-medium truncate truncate-overflow overflow-hidden">{product.fields.title}</h3>
                <h4 className="text-center">{product.fields.category.fields.type}</h4> 
                <p className="w-full mt-5 flex justify-between font-normal color-[#001011]">Ціна :<span className="text-[20px] font-semibold color-[#001011] ">{price} грн</span></p>
                
                <ControleCard step={product.fields.category.fields.step} setPrice={setPrice} initialPrice={+product.fields.price} id={product.sys.id} price={price} title={product.fields.title} img={image} category={product.fields.category.sys.contentType.sys.id} full={false}/>
                
            </div>
            
        </li>    
    )
}

export default ProductCard;
//product.fields.mainImg.fields.file.url