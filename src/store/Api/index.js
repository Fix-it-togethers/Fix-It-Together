import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authSlice } from "./AuthSlice";
import { UserSlice } from './UserSlice';


export const store =configureStore({
    reducer:{
        [authSlice.reducerPath]:authSlice.reducer,
        [UserSlice.reducerPath]:UserSlice.reducer
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(authSlice.middleware)
    .concat(UserSlice.middleware),
})
setupListeners(store.dispatch)