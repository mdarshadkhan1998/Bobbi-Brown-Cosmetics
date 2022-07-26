

   export  const producttocart = (payload) =>{
      return {
         type: "PRODUCTTOCART",
         payload
      }
     }

     export const removefromcart = (payload) => {
      return {
         type :"REMOVEFROMCART",
         payload
      }
     }

     export const changequantity = (payload) => {
      return {
         type: "QUANTITY",
         payload
      }
     }

     export const totalprice = (payload) => {
      return {
         type: "TOTALPRICE",
         payload
      }
     }

    