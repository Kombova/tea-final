import Image from 'next/image'
import client from '@/contentful'

const getSaiteControle = async ()=>{
  const data =await client.getEntries({
    content_type: 'saite'
  })
  return data.items;
}

export default async function Home() {
  const sliderProps = await setInterval(() => {
    let data = getSaiteControle()
  }, 3000); 
  
  
  return (
    <main>
      Home
    </main>
  )
}



