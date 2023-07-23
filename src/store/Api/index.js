import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authSlice } from "./AuthSlice";
import { UserSlice } from './UserSlice';
import { FixSlice } from './FixSlice';


export const store =configureStore({
    reducer:{
        [authSlice.reducerPath]:authSlice.reducer,
        [UserSlice.reducerPath]:UserSlice.reducer,
        [FixSlice.reducerPath]:FixSlice.reducer
    },

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(authSlice.middleware)
    .concat(UserSlice.middleware)
    .concat(FixSlice.middleware),
})
setupListeners(store.dispatch)