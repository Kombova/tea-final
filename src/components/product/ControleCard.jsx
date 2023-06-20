'use client'
const ControleCard = ({step,setPrice}) =>{
    console.log(step)
    let count = !step ? 1 : step[1];
    
    return(
        <div className="w-full h-12 mt-5  bg-black rounded-[10px]">
            {!step && <div className="flex h-full justify-between items-center">
                <button className="text-[40px] text-white text-center grow ">-</button>
                <div className="bg-white w-[130px] h-5/6 rounded-[10px] text-[20px] font-medium flex items-center justify-center gap-2 text-center ">{+count}<span>шт</span> </div>
                <button className="text-[40px] text-white text-center grow ">+</button>
            </div>}
            {step && <div><button>-</button><span>{+count}</span><button>+</button></div>}
        </div>
    )
}

export default ControleCard;