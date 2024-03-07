import useFetchData from "../custom-hooks/useFetchData";
import { sentActions } from "./MailSentReducer";
import { receivedActions } from "./MailReceivedReducer";

export function getSentMails(mail) {
    return async (dispatch) => {
        try {
            const { data, isLoading, error } = useFetchData(`https://mail-composer-default-rtdb.firebaseio.com/${mail}/sent.json`);
            if (!isLoading && !error && data !== null) {
                const keys = Object.keys(data);
                keys.forEach(key => {
                    const mail = { id: key, ...data[key] };
                    dispatch(sentActions.addMail(mail));
                });
            } else {
                throw new Error(error !== null ? error.message : 'Data is empty in sent mails');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function getReceivedMails(mail) {
    return async (dispatch) => {
        try {
            const { data, isLoading, error } = useFetchData(`https://mail-composer-default-rtdb.firebaseio.com/${mail}/receive.json`);
            if (!isLoading && !error && data !== null) {
                const keys = Object.keys(data);
                keys.forEach(key => {
                    const mail = { id: key, ...data[key] };
                    dispatch(receivedActions.addReceivedMail(mail));
                });
            } else {
                throw new Error(error !== null ? error.message : 'Data is empty in receive mails');
            }
        } catch (error) {
            console.log(error);
        }
    }
}
