'use client'

import { createContext, useState } from "react";

export const GlobalStateContext=createContext();


const GlobalStateProvider = ({children}) =>{
    const[globalState,setGlobalState]=useState({shoppingCartArr: [],selectedMenu:'Усі' });
    let useGlobalState={
        globalState,
        setGlobalState
    }
    return <GlobalStateContext.Provider value={useGlobalState}>{children}</GlobalStateContext.Provider>
}

export default GlobalStateProvider;
