import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./nav/DesktopNav";
import PhoneNav from "./nav/PhoneNav";
import ShoppingCart from "../shoppingCart/ShoppingCart";
const Header = ({fetchLogo}) =>{
    
    return(
        <header className="header w-full h-[75px]  shadow-2xl mb-[50px] sticky top-0 z-20 mx-auto bg-[white]  ">
            <div  className="flex h-full justify-between items-center  max-w-7xl  mx-auto  max-2xl:px-2">
                <DesktopNav fetchLogo={fetchLogo}/>
                <div className="w-[120px] h-[65px] z-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "><Link href={'/'}><Image src={`http:${fetchLogo}`} fill={true} alt="Logo"/></Link></div>
                <PhoneNav/>      
                <div className=" shrink h-full flex items-center  max-[720px]:w-auto max-[720px]:static ">   
                    <ShoppingCart/>
                </div>    
            </div>
        </header>
    )
}

export default Header;