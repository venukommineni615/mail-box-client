import { sentActions } from "./MailSentReducer"
import { receivedActions } from "./MailReceivedReducer"
export function getSentMails(mail){
    return async(dispatch)=>{
       try {const res=await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${mail}/sent.json`)
        const data=await res.json()
        if(!res.ok || data===null){
            throw new Error(data!==null?data.error.message:'data is empty in sent mails')
        }else{
            const keys=Object.keys(data)
           
            for(let i in keys){
                const mail={id:keys[i],...data[keys[i]]}
                dispatch(sentActions.addMail(mail))
            }
        }}catch(error){
            console.error(error)
        }
    }
 }
export function getReceivedMails(mail){
    return async(dispatch)=>{
        try{const res=await fetch(`https://mail-composer-default-rtdb.firebaseio.com/${mail}/receive.json`)
        const data=await res.json()
        if(!res.ok || data===null){
            throw new Error(data!==null?data.error.message: 'data is empty in receive mails')
        }else{
            if(data===null){
                return
            }else{
            const keys=Object.keys(data)
            for(let i in keys){
                const mail={id:keys[i],...data[keys[i]]}
                dispatch(receivedActions.addSentMail(mail))
            }
        }}}catch(error){
            console.error(error)
        }
    }
 }