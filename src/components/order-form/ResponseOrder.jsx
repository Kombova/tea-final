import Image from "next/image";
import Link from "next/link";
const ResponseOrder = ({result,sum}) =>{
    const grivnaSymbol = "\u20B4";
    return(
        <div className="min-h-screen w-full left-0 flex items-center relative border border-[grey]  max-sm:border-0  max-sm:rounded-none rounded-xl">
                <Image className="absolute top-0 left-0 w-full h-full rounded-md -z-10 opacity-80 object-cover max-sm:rounded-none" src='/tea_order_response.jpg' fill={true}/>
            <div className="w-full  py-6 mx-auto z-10  rounded relative text-center    ">
            
                {result === 'Ok' &&
                <>
                    
                    <h2 className=" text-center py-1 max-sm:mt-2  mx-auto bg-[#0E6288] bg-opacity-80 text-[20px] text-slate-200 max-sm:w-full">Замовлення відправлене</h2>
                    <h3 className="mt-4 bg-[#095C62] text-slate-200">На протязі 10 хв ми з вами зв&apos;яжемось</h3>
                    <div className="w-[300px] mx-auto">   
                        <p className=" mt-2 py-2 border-b-2 border-[grey]">Зв&apos;язок</p>
                        <div className="mt-4 flex justify-center gap-3 flex-wrap">
                            <a className="bg-[#0E8388] p-1 rounded-md basis-full text-slate-200 hover:scale-110" href='tel:380963935605'>+380 96 39 35 605</a>
                            <Link className="hover:scale-110" href='#'><Image src='/gmail.ico' width={50} height={50} alt="Посилання на пошту"/></Link>
                            <Link className="hover:scale-110" href='#'><Image src='/telegram.png' width={50} height={50} alt="Посилання телеграм"/></Link>
                            <Link className="hover:scale-110" href='#'><Image src='/viber.png' width={50} height={50} alt="Посилання вайбер"/></Link>
                            <Link className="hover:scale-110" href='#'><Image src='/whatsapp.png' width={50} height={50} alt="Посилання ватсап"/></Link>
                            <Link className="hover:scale-110" href='#'><Image src='/insta.png' width={50} height={50} alt="Посилання инстаграмм"/></Link>
                        </div>

                    </div>
                    
                    <div className="w-[500px] max-sm:w-full mx-auto">
                        <p className=" mt-2 py-2 border-b-2 border-[grey]">Оплата</p>
{/*------------------------ DESKTOP VERSION */}

                        <div className="mt-6 flex justify-center gap-4 flex-wrap max-sm:hidden">
                            <div className="rounded-md hover:scale-110">
                                <Image className="rounded-md" src='/monobank.jpg' width={200} height={100} alt="Посилання на монобанк"/>
                            </div>
                            <div className="flex flex-col gap-4 pt-2 px-2 rounded-md bg-neutral-600 hover:scale-110">
                                <Image src='/privatbank_logo.png' width={200} height={100} alt="Лого приватбанка"/>
                                <Image src='/privatbank.jpg' width={200} height={100} alt="Посилання на приватбанк"/>
                            </div>
                        </div>
                        {/*------------------------ PHONE VERSION */}
                        <div className="mt-4 hidden justify-center gap-4 flex-wrap max-sm:flex">
                            <Link className="rounded-md" href='#'><Image className="rounded-md" src='/mono_little_logo.jpeg' width={60} height={60} alt="Посилання ватсап"/></Link>
                            <Link className="bg-black py-1 px-[6px] rounded-md" href='#'><Image  src='/privat_little_logo.png' width={50} height={50} alt="Посилання ватсап"/></Link>
                        </div>
                    <p className="mt-8 text-[20px] pb-2 border-b-2 border-black  max-sm:border-0">Сумма до сплати : <span className=" p-1 bg-[#0E8388] text-white rounded-md">{grivnaSymbol}{sum}</span>  </p>
                    </div>
                    
                </>
                }    
                {result === 'Error' && <p className="text-[25px] text-white bg-gray-600 p-2 w-fit mx-auto rounded-lg">Щось пішло не за планом можливо проблеми з інтернетом спробуйте ще...</p>} 
            </div>
        </div>
    )
}

export default ResponseOrder;