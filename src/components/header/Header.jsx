import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./nav/DesktopNav";
import PhoneNav from "./nav/PhoneNav";
const Header = ({fetchLogo}) =>{
    
    return(
        <header className="header w-full shadow-2xl mb-[50px]">
            <div  className="flex justify-between items-center  max-w-7xl  mx-auto py-2     max-2xl:px-2">
                <DesktopNav fetchLogo={fetchLogo}/>
                <PhoneNav/>
                 <div className=" min-[720px]:hidden w-[100px] h-[50px] relative"><Link  href={'/'}><Image src={`http:${fetchLogo}`} fill={true}  alt="Logo"/></Link></div>
                <div className="w-[110px] shrink flex items-center max-[720px]:w-auto ">   
                    <div className="relative w-11 h-11 ml-auto mr-0 ">
                        <Image src={'/shopping-cart.svg'} fill={true} alt="Shopping Cart"/>
                        <div className="absolute bottom-[-8px] left-[-10px] w-7 h-7 rounded-[100%] bg-[#0E8388] text-[white] text-[18px] font-semibold flex justify-center items-center">10</div>
                    </div>
                </div>    
            </div>
        </header>
    )
}

export default Header;