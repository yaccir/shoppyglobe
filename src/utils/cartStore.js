
import {configureStore} from "@reduxjs/toolkit"
import appreducer from "./cartSlice"
const apStore=configureStore({
    reducer:{
      cart11: appreducer
    }

})
export default apStore;