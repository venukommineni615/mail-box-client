import { createSlice } from "@reduxjs/toolkit";

const mailSent=createSlice({
    name:'sent',
    initialState:{mails:[]},
    reducers:{
        addMail(state,action){
            const ele=state.mails.find((item)=>{
                return item.id=action.payload.id
            })
            if(ele){
                state.mails.push(action.payload)
            }else{
                return state
            }
        },
        removeMail(state,action){
            state.mails=state.mails.filter((mail)=>{
                return mail.id!==action.payload.id
            })
        }
    }
})
export const sentActions=mailSent.actions
 export default mailSent.reducer