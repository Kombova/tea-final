import client from "@/contentful";
import ProductCard from "@/components/product/ProductCard";
const getProducts = async ()=>{
    const data =await client.getEntries({
      content_type: 'product'
    })
    return data.items;
  }
export default async function Shop(){

    
    
    return(
        <>
            {/* <ul className="w-full flex justify-center gap-10">
                {allProduct.map((item)=> (<ProductCard product = {item}/>))}
            </ul>  */}
            <h1>Ще не готово ...</h1>
        </>
    )
} 