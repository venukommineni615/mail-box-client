import { configureStore } from "@reduxjs/toolkit";
import sentReducer from "./MailSentReducer";
import receivedReducer from "./MailReceivedReducer";
import userReducer from "./userReducer";

export const store=configureStore({reducer:{sent:sentReducer,
received:receivedReducer,
user:userReducer}})