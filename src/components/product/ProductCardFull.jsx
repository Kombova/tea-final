'use client';
import Image from "next/image";
import { useState } from "react";
import ControleCard from "./ControleCard";
const ProductCardFull = ({product}) =>{
//product.fields
const[picture,setPicture]=useState(`http:${product.fields.mainImg.fields.file.url}`);
const[price,setPrice]=useState(+product.fields.price)
// console.log(product.fields.arrImg[0].fields.file.url)

    return(
        <div className="w-full overflow-y-hidden">
            <div className="flex flex-wrap justify-center">
                <section className="max-sm:basis-0 basis-2/4 p-4 max-sm:p-0">
                    <div className="mx-auto relative w-full h-[500px] max-sm:w-screen max-sm:h-80 max-sm:border-0 border-[1px] border-soild border-[grey]">
                        <Image className=" top-0 left-0 object-cover" src={picture} fill={true} alt={'Зображення продукту'}/>
                    </div>
                    <ul className="flex max-sm:justify-center gap-2 mt-2 ">
                        {
                            product.fields.arrImg.map((item)=>{
                                return <li onClick={(e)=>setPicture(`http:${item.fields.file.url}`)} className="border-[1px] border-soild border-[grey] relative w-full h-[100px] cursor-pointer" key={item.fields.file.url}><Image  src={`http:${item.fields.file.url}`} fill={true} alt={'Зображення продукту'}/></li>
                            })
                        }
                    </ul>
                    <div className="">
                        <p className=" border-b-[1px] mx-auto border-solid border-[grey] w-48 mt-5 flex justify-between font-normal color-[#001011]">Ціна :<span className="text-[20px] font-semibold color-[#001011] ">{price} грн</span></p>
                        <ControleCard step={product.fields.category.fields.step} setPrice={setPrice} initialPrice={+product.fields.price} id={product.sys.id} price={price} title={product.fields.title} img={picture} category={product.fields.category.sys.contentType.sys.id} full={true}/>
                    </div>
                    
                    
                </section>







                <section className=" basis-2/4 p-2">
                    <h1 className="py-2  text-left text-[20px] font-medium truncate overflow-hidden border-b-[1px] border-solid border-[grey]">{product.fields.title}</h1>
                    <div className="py-4 w-52">
                        <h3 className="flex gap-1 items-center" ><Image src={'/leaf.svg'} width={20} height={20} alt="Тип"/>{product.fields.category.fields.type}</h3>
                        <p className="flex gap-1 items-center">
                            {product.fields.country === 'Ukraine' && <Image src={'/ukraine-flag.svg'} width={20} height={20} alt="флаг"/>}
                            {product.fields.country === 'Japan' && <Image src={'/jspsn-flag.svg'} width={20} height={20} alt="флаг"/>}
                            {product.fields.country === 'China' && <Image src={'/china-flag.svg'} width={20} height={20} alt="флаг"/>}
                            {product.fields.country === 'Taiwan' && <Image src={'/taiwan-flag.svg'} width={20} height={20} alt="флаг"/>}
                        {product.fields.country}</p>
                        <p className="flex gap-1 items-center"><Image src={'/calendar.svg'} width={20} height={20} alt="Дата збору"/>{product.fields.date}</p>
                    </div>
                    <div>
                        {<h2>
                            {product.fields.category.fields.description.content.map((item,index)=>{
                            return <p key={index}>{item.content[0].value}</p>
                            })}
                        </h2>} 
                        
                        
                    </div>
                   {product.fields.category.sys.contentType.sys.id === 'tea' &&
                        <div className="py-4">
                        <h5 className=" text-left  font-medium ">Як заварювати</h5>
                        <div className="mt-4 flex flex-col gap-3">
                            <p className="flex gap-2 items-center"><span className="w-[20]"><Image src={'/leaf.svg'} width={20} height={20} alt="Кількість чаю"/></span>Кількість чаю : <span>{product.fields.category.fields.recsAmount}</span></p>
                            <p className="flex gap-2 items-center"><span className="w-[20]"><Image src={'/teapot.svg'} width={20} height={20} alt="Посуд"/></span>Посуд :<span>{product.fields.category.fields.recsTeaWare}</span></p>
                            <p className="flex gap-2 items-center"><span className="w-[20]"><Image src={'/temperature.svg'} width={20} height={20} alt="Температура води"/></span>Температура води :<span>{product.fields.category.fields.recsTemp}</span></p>
                            <p className="flex gap-2 items-center"><span className="w-[20]"><Image src={'/timer.svg'} width={20} height={20} alt="Час настоювання"/></span>Час настоювання :<span>{product.fields.category.fields.recsExp}</span></p>
                            <p className="flex gap-2 items-center"><span className="w-[20]"><Image src={'/refresh.svg'} width={20} height={20} alt="Кількість проливів"/></span>Кількість проливів :<span>{product.fields.category.fields.recsNum}</span></p>
                        </div>
                        </div>
                   }
                </section>
            </div>
        </div>
    )
}

export default ProductCardFull;