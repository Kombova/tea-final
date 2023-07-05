import Image from "next/image"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className='absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50'><Image className='absolute top-0 left-0 w-full h-full' src='/spinner.svg' width={100} height={100} alt='spinner' /></div>
  }