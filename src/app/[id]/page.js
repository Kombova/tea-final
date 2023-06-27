import client from "@/contentful"
import ProductCardFull from "@/components/product/ProductCardFull";
export async function generateStaticParams() {
    const getProducts = async ()=>{
        const data =await client.getEntries({
          content_type: 'product'
        })
        return data.items;
      }
    let arrAllProducts = await getProducts()
    let productIdArr =  arrAllProducts.map((item)=>{
        return {id: item.sys.id}
    })
    return productIdArr;
  }

const getProduct = async (id)=>{
    const data = await client.getEntry(id)
return data;
}

export default async function Product({params}){
    let id = params.id;
    let product = await getProduct(id);
    return(
        <>
            <ProductCardFull product={product}/>
        </>
    )
} 