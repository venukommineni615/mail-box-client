import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{user:localStorage.getItem('email').replace("@", "").replace(".com", "")},
    reducers:{
        addUser(state,action){
            state.user=action.payload
        }
    }
})
export const userAction=userSlice.actions
export default userSlice.reducer