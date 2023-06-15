import Image from 'next/image'
import client from '@/contentful'
import ProductCard from '@/components/product/ProductCard';
import Slider from '@/components/slider/Slider';


const getSliderImgArr = async ()=>{
  const data =await client.getEntries({
    content_type: 'saite'
  })
  return data.items;
}

export default async function Home( ){
  const sliderImgArr = await getSliderImgArr();
  const sliderArr= sliderImgArr[0].fields.slider.map((item)=>{
    return  item.fields.file.url
  });
  const sliderLink =  sliderImgArr[0].fields.sliderLink;

 
  
 
  return (
    <main>
      Home
      <ProductCard/>
      <Slider array={sliderArr} sliderLinks={sliderLink}/>
    </main>
  )
}



