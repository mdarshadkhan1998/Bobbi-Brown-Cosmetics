
 const initState = {
     cart: [],
     total: 0
 }



export const reducer = (store = initState , {type,payload}) => {
    //  console.log(store)
    switch (type) {
        case "PRODUCTTOCART" : return {
            ...store,
            cart : [...store.cart , payload]
        }
        
        case "REMOVEFROMCART" : return {
            ...store,
            cart : [...store.cart.filter((item)=> item!= payload)]
        }
       
        case "QUANTITY" : return {
             ...store,
              cart :[...store.cart.map((item)=> item.id == payload.id ? payload : item)]
        }
        case "TOTALPRICE" : return {
            ...store,
            total: payload
        }
        default : return store
    }
}
