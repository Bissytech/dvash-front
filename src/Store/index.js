import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart';
import  countslice from "./Counterslice";


export const store = configureStore({
    reducer:{
        cart: cartReducer,
        countslice
        // user:...
    }
})