
import client from '@/contentful';
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
      <Slider array={sliderArr} sliderLinks={sliderLink}/>
      <h2 className='mt-[100px] max-w-[500px] mx-auto text-[36px] text-center px-[2px] border-t-2 border-b-2 border-[black]'>Нові надходження</h2>
      
    </main>
  )
}



