
// import React from 'react'
import {PRODUCTTOCART} from './action.js'

 const initState = {
     cart: []
 }



export const reducer = (state = initState , {type,payload}) => {
     
    switch (type) {
        case PRODUCTTOCART : {
        //     console.log("state:",state,"action.type",action.type,"action.payload",action.payload)
        // console.log(state)
            return {
            ...state.cart,  payload
        }}

        default : return state
    }
}
