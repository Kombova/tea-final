import getProducts from "@/service/service"
import ShowCategories from "@/components/categories/ShowCategories";
export default async function TeawareShop(){
    const productsArr = await getProducts();
    // console.log(productsArr[0].fields.category.sys.contentType.sys.id)
    return(
        <>  
            <h1 className='mt-10 max-w-[500px] mx-auto text-[36px] text-center px-[2px] border-t-2 border-b-2 border-[black]'>Посуд</h1>
            <ul className="mt-10 flex justify-start gap-2">
                <ShowCategories productsArr={productsArr} category="teaWare"/>
            </ul>
        </>
    )
} 