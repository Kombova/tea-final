import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./nav/DesktopNav";
import PhoneNav from "./nav/PhoneNav";
import ShoppingCart from "../shoppingCart/ShoppingCart";
const Header = ({fetchLogo}) =>{
    
    return(
        <header className="header w-full shadow-2xl mb-[50px] ">
            <div  className="flex justify-between items-center  max-w-7xl  mx-auto py-2 max-2xl:px-2">
                <DesktopNav fetchLogo={fetchLogo}/>
                <PhoneNav/>
                 <div className=" min-[720px]:hidden w-[120px] h-[80px] relative"><Link  href={'/'}><Image src={`http:${fetchLogo}`} fill={true}  alt="Logo"/></Link></div>
                <div className="w-[110px] shrink flex items-center max-[720px]:w-auto ">   
                    <ShoppingCart/>
                </div>    
            </div>
        </header>
    )
}

export default Header;