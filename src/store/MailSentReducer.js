import { createSlice } from "@reduxjs/toolkit";

const mailSent=createSlice({
    name:'sent',
    initialState:{mails:[]},
    reducers:{
        addMail(state,action){
            ('sent bro')
            state.mails.push(action.payload)
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