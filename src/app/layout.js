import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import client from '@/contentful';
import GlobalStateProvider from '@/context/GlobalState';
import { Suspense } from 'react';
import Loading from './loading';
const montserrat = Montserrat({ subsets: ['latin','cyrillic','cyrillic-ext'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

 
// export const revalidate = 10

const getSiteControle = async ()=>{
  const data =await client.getEntries({
    content_type: 'saite'
  })
  return data.items;
}

export default async function RootLayout({ children }) {
   
let fetchLogo = await getSiteControle();
  return (
    <html>
      <body className={montserrat.className}>
        {children.props && children.props.childProp.segment === 'admin' && children }
        {children.props && children.props.childProp.segment !== 'admin' &&
          <GlobalStateProvider>
          <div className='w-full'>
            <Header fetchLogo={fetchLogo[0].fields.logo.fields.file.url}/>
              <main className=' max-w-7xl min-h-screen mx-auto mt-[75px] py-6'>
                <Suspense fallback={<Loading/>}>
                  {children}
                </Suspense>
              </main>
            <Footer/>
          </div>
        </GlobalStateProvider>
        }
      </body>
    </html>
  )
}




