'use client'
import Link from 'next/link';
import Image from 'next/image'; 
export default function NotFound() {
  return (
    <div className='relative h-screen w-full flex items-center justify-center flex-col gap-6 text-[20px]'>
        <div className='bg-white p-4 rounded-md bg-opacity-80'>
            <h2>Схоже чай котрий ви шукали скінчився...</h2>
            <p>Але в нас є ще багато смачного чаю ! </p>
        </div>
        <Link className=' py-2 px-6 bg-[#0E8388] rounded-xl text-white' href='/tea-shop'>Магазин</Link>
        <Image className=' object-cover absolute w-full h-full -z-10' src='/404.jpg' fill={true} />
    </div>
  )
}