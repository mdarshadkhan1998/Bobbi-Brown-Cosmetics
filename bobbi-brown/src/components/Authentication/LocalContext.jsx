import React, { createContext, useState } from "react";

export const LocalStorageContext = createContext();
const arr = JSON.parse(localStorage.getItem("local")) || []
export const LocalContext = ({children}) =>{
       const [local,setlocal] = useState([...arr])
   
       const addtolocalstorage = (data)=>{
           setlocal([...local,data])
        //    console.log(local)
           localStorage.setItem("local",JSON.stringify(local))
       }
  
    return (
        <LocalStorageContext.Provider value={{arr,local,setlocal,addtolocalstorage}}>
        {children}
        </LocalStorageContext.Provider>
    )
}