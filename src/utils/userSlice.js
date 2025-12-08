import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        users:[],
       
    },
    reducers:{
        registerUser:(state,action)=>{

            state.users.push(action.payload);
            //from here also the logic of back end will be 

        },
        loginUser:(state,action)=>{
            //from here we can check the authorized login details to back end from the initial state 
        }

    }
});


export const {registerUser}=userSlice.actions;
export default userSlice.reducer;