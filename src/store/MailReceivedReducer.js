import { createSlice } from "@reduxjs/toolkit";

const mailReceived=createSlice({
    name:'sent',
    initialState:{mails:[],unread:0},
    reducers:{
        addReceivedMail(state,action){
            if(action.payload.read){
               state.unread++
            }
            const ele=state.mails.find((item)=>{
                return item.id=action.payload.id
            })
            if(ele){
                state.mails.push(action.payload)
            }else{
                return state
            }
        },
        removeReceivedMail(state,action){
            const ele=state.mails.find((mail)=>{
                return mail.id=action.payload.id
            })
            if(ele.read){
                state.unread--
            }
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

 