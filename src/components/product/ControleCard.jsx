'use client'
import { useEffect, useState } from "react";
const ControleCard = ({step,setPrice,initialPrice}) =>{
    let startCount = !step ? 1 : step[1];
    const[count,setCount]=useState(+startCount);
    useEffect(()=>{
        if(step){
            let price = initialPrice / 1000;
            setPrice(()=>price * count)
        }
        
    })

    function clickPlus(){
        setCount((count)=>count + 1)
        setPrice(()=>initialPrice * (count+1))
    }
    function clickMinus(){
        setCount((count)=> count > 1 ? count - 1 : 1)
        setPrice(()=> count === 1 ? initialPrice : initialPrice * (count-1))
    }
    function clickSelect(e){
        let newCount = +e.target.value;
        setCount(newCount)
    }
    return(
        <div className="w-full h-12 mt-5  bg-black rounded-[10px]">
            {!step && <div className="flex h-full justify-between items-center">
                <button className="text-[40px] text-white text-center grow " onClick={()=>clickMinus()}>-</button>
                <div className="bg-white w-[130px] h-5/6 rounded-[10px] text-[20px] font-medium flex items-center justify-center gap-2 text-center ">{+count}<span>шт</span> </div>
                <button className="text-[40px] text-white text-center grow " onClick={()=>clickPlus()}>+</button>
            </div>}

            {step &&  <div className="flex h-full justify-evenly items-center text-white text-[16px] font-medium">
                {step.map((step)=>{
                        if(count === +step){
                            return <button key={step} className="bg-white text-black w-[85px] h-5/6 rounded-[10px]">{step} гр</button>
                        }else return <button key={step} className=" w-[85px]" onClick={(e)=> clickSelect(e)} value={step}>{step} гр</button>   
                    })
                }
                </div>     
            }
        </div>
    )
}

export default ControleCard;