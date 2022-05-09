

import React, { createContext, useState } from 'react'

export const Authcontext = createContext()

export const CartContext = ({children}) => {
  
    const [arr,setarr] = useState([])

    const handleremove = (id) => {
        fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((res) => {
            fetch(`http://localhost:3000/data`)
              .then((res) => res.json())
              .then((res) => setarr(res))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
    
      };
  // console.log(arr)
  return (
    <Authcontext.Provider value={{arr,setarr,handleremove}}>
 {children}
    </Authcontext.Provider>
  )
}
