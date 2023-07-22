import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BaseUrl'
import Cookies from 'js-cookie';
const setToken = (token) => {
    return Cookies.set("token", token, { expires: 1 });
}
export const authSlice = createApi({
    // setup
    reducerPath: "authSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        // SignUP
        signUp: builder.mutation({
            query: (newUser) => ({
                url: "/user/register",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["auth"]
        }),

        signIn: builder.mutation({
            query: (existuser) => ({
                url: "/user/login",
                method: "POST",
                body: existuser
            }),
            onQueryStarted: async (arg, { queryFulfilled }) => {
                try {
                    const result = await queryFulfilled
                    console.log(result)
                    setToken(result.data.token);
                } catch (error) {
                    console.log("login ka error ayaa ka jiro ", error)
                }
            },
            invalidatesTags: ["auth"]
        })

    }),
})

export const { useSignUpMutation, useSignInMutation } = authSlice;
export default authSlice.reducer


