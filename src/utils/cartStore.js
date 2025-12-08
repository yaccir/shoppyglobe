
import {configureStore} from "@reduxjs/toolkit"
import appreducer from "./cartSlice"
import userReducer from "./userSlice"
const apStore=configureStore({
    reducer:{
      cart11: appreducer,
      user11:userReducer
    }

})
export default apStore;