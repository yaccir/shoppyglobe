
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
            quantity:1
            
        })
        
      },
    setQuantities: (state, action) => {
  state.items = state.items.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: action.payload.value };
    }
    return item;
  });
},
      removeCartItem:(state,action)=>{
           state.items = state.items.filter((item) => {
    if (item.id === action.payload) {
           return false;
    }
    return true;
  });


      },
      clearCartItems:(state,action)=>{
        state.items.length=0;

      },
  
}

})

export const {addCartItem, 
                setQuantities,
                    removeCartItem, 
                        clearCartItems} =cartSlice.actions;
export default cartSlice.reducer;