'use client'
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) =>{
    console.log(product.fields.mainImg.fields.file.url)
    return(  
        <li key={product.id} className="w-[290px] h-[462px] rounded-[15px] shadow-2xl overflow-none" style={{ boxShadow: '2px 2px 7px rgba(34, 31, 31, 0.4)' }}>
            <div className="w-full h-48 relative rounded-t-[15px] object-cover">
                <Link href={'/'}>
                    <Image className=" rounded-t-[15px]" src={`http:${product.fields.mainImg.fields.file.url}`} fill={true} alt={product.fields.title}/>
                </Link>
            </div>
            <div className="px-[10px]">
                <h3 className=" text-center text-[20px]  font-semibold">{product.fields.title}</h3>
                <p className="w-full flex justify-between font-normal color-[#001011]">Ціна за одну штуку:<span className="text-[20px] font-semibold color-[#001011] ">{product.fields.price}</span></p>
                <p>{product.fields.category.fields.type}</p> 
            </div>
            
        </li>    
    )
}

export default ProductCard;