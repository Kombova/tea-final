'use client '
import Image from "next/image";

const ShoppingCart = () => {
    return(
        <div className="relative w-11 h-11 ml-auto mr-0 cursor-pointer ">
            <Image src={'/shopping-cart.svg'} fill={true} alt="Shopping Cart"/>
            <div className="absolute bottom-[-8px] left-[-10px] w-7 h-7 rounded-[100%] bg-[#0E8388] text-[white] text-[18px] font-semibold flex justify-center items-center">10</div>
        </div>
    )
}

export default ShoppingCart;