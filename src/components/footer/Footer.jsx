import Link from "next/link";
import Image from "next/image";
import insta_icon from '../../../public/insta.png';
import telegram_icon from '../../../public/telegram.png';
import viber_icon from '../../../public/viber.png';
const Footer = () =>{
    
    return(
        <footer className="w-full min-h-[100px] bg-[#221F1F] text-slate-400">
            <div className="flex justify-between  max-sm:flex-col max-sm:items-center  flex-wrap max-w-7xl mx-auto py-3 px-2">
                <section className="">
                    <nav className="max-sm:hidden">
                        <ul>
                            <li><Link href={'/'} >Головна</Link></li>
                            <li><Link href={'/tea-shop'}>Чай</Link></li>
                            <li><Link href={'/teaware-shop'}>Посуд</Link></li>
                            <li><Link href={'/about-us'}>Про нас</Link></li>
                            <li><Link href={'/delivery'}>Доставка</Link></li>
                            <li><Link href={'/'}>Блог</Link></li>
                        </ul>
                        
                    </nav>
                </section>
                <section className="flex flex-col gap-2">
                    <div className="flex gap-2"><Image src='phone.svg' width={20} height={20} alt="Phone"/><a href="tel:+380 67 39 15 205">+380 67 39 15 205</a></div>
                    <div className="flex gap-2"><Image src='mail.svg' width={20} height={20} alt="Phone"/><a href="malo:beachaino@gmail.com">beachaino@gmail.com</a></div>     
                </section>
                <section className="max-sm:mt-2 ">
                    <h6 className="text-[20px] text-slate-200">Наші соціальні мережі</h6>
                    <ul className="mt-2 flex justify-center gap-2">
                        <li><Link href='/'><Image src={insta_icon} width={50} height={50} alt='Instagram' /></Link></li>
                        <li><Link href='/'><Image src={telegram_icon} width={50} height={50} alt='Telegram' /></Link></li>
                        <li><Link href='/'><Image src={viber_icon} width={50} height={50} alt='Viber' /></Link></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer;