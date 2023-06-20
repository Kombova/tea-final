
import client from '@/contentful';
import Slider from '@/components/slider/Slider';
import ProductCard from '@/components/product/ProductCard';

const getSliderImgArr = async ()=>{
  const data =await client.getEntries({
    content_type: 'saite'
  })
  return data.items;
}
const getProducts = async ()=>{
  const data =await client.getEntries({
    content_type: 'product'
  })
  return data.items;
}


export default async function Home( ){

  const sliderImgArr = await getSliderImgArr();
  const sliderArr= sliderImgArr[0].fields.slider.map((item)=>{
    return  item.fields.file.url
  });
  const sliderLink =  sliderImgArr[0].fields.sliderLink;

 
  let allProduct = await getProducts();
 
  return (
    <main> 
      <Slider array={sliderArr} sliderLinks={sliderLink}/>
      <h1 className='mt-20 max-w-[500px] mx-auto text-[36px] text-center px-[2px] border-t-2 border-b-2 border-[black]'>Магазин</h1>
      <ul className="w-full mt-20 flex flex-wrap justify-center gap-10">
                {allProduct.map((item)=> (<ProductCard product = {item}/>))}
      </ul> 
    </main>
  )
}



