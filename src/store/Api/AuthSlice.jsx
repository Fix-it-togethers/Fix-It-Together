import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BaseUrl'
export const authSlice = createApi({
    // setup
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: BASE_URL }),

    endpoints: (builder) => ({
        // SignUP
        signUp: builder.mutation({
            query: (newUser) => {
                return {
                url:"/user/register",
                method:"POST",
                body: newUser,
            };
            on
        },
       
        }), 
    }),
})

export const {
   useSignUpMutation
} = authSlice;
export default authSlice.reducer


