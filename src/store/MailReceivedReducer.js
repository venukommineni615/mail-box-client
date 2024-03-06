import { createSlice } from "@reduxjs/toolkit";

const mailReceived=createSlice({
    name:'sent',
    initialState:{mails:[]},
    reducers:{
        addSentMail(state,action){
            state.mails.push(action.payload)
        },
        removeMail(state,action){
            state.mails=state.mails.filter((mail)=>{
                return mail.id!==action.payload.id
            })
        },
        markAsRead(state,action){
            const index=state.mails.find((item)=>{
                return item.id===action.payload.id
            })
            state.mails[index].read=true
        }
    }
})
export const receivedActions=mailReceived.actions
 export default mailReceived.reducer

 