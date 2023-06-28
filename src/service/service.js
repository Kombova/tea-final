import client from "@/contentful";
const getProducts = async()=>{
            const data =await client.getEntries({
            content_type: 'product'
            })
            return data.items;
        }
export default getProducts;
