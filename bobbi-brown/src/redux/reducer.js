
// import React from 'react'
import {PRODUCTTOCART} from './action.js'

 const initState = {
     cart: [],
    error:false
 }



export const reducer = (state= initState , action) => {
     
    switch (action.type) {
        case PRODUCTTOCART : return {
            ...state,
            cart: action.payload,
        }
        default : return state
    }
}
