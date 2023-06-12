import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header/Header';
import client from '@/contentful';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//  const getProducts = async ()=>{
//   const data =await client.getEntries({
//     content_type: 'product'
//   })
//   return data.items;
// }

// const getSaiteControle = async ()=>{
//   const data =await client.getEntries({
//     content_type: 'saite'
//   })
//   return data.items;
// }

export default async function RootLayout({ children }) {
  
    // let allProducts = await getProducts();
    // let siteManagement = await getSaiteControle();
    // console.log(siteManagement)
    
 
  
  return (
    <html>
      <body className={montserrat.className}>
        <div className='w-full min-h-screen'>
          <Header />
          <main className=' max-w-7xl mx-auto my-6'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}




