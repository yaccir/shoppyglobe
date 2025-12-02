
import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
name:"cart",
initialState:{
    items:[]
},
reducers:{
      addCartItem:(state,action)=>{
        
        state.items.push({
           name:action.payload.title,
           price:action.payload.price,
           id:action.payload.id,
            image:action.payload.image,
            brand:action.payload.brand,
        })
      },
      setQuantities:()=>{},
      removeCartItem:()=>{},
      clearCartItems:()=>{},
  
}

})

export const {addCartItem, 
                setQuantities,
                    removeCartItem, 
                        clearCartItems} =cartSlice.actions;
export default cartSlice.reducer;