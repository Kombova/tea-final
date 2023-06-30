import getProducts from "@/service/service";
import TeaShop from "@/components/tea-shop/TeaShop";
export default async function TeaStore(){
    const productsArr = await getProducts(); 
    return(
        <>
            <h1 className='mt-10 max-w-[500px] mx-auto text-[36px] text-center px-[2px] border-t-2 border-b-2 border-[black]'>Чай</h1>
            <TeaShop productsArr={productsArr} />
        </>
    )
} 