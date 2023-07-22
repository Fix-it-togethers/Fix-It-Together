import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BaseUrl'
import Cookies from 'js-cookie';
const getToken = () => {
    return Cookies.get("token");
}
export const FixSlice = createApi({
    // setup
    reducerPath: "FixSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (Headers) => {
            const result = getToken();
            if(result){
                Headers.set("Authorization", `Bearer ${result}`);
            }
            return Headers;
        }
    }),
    tagTypes: ["issues"],
    endpoints: (builder) => ({
        // Add Issue
        AddIssue: builder.mutation({
            query: (newIssue) => ({
                url: "/issues",
                method: "POST",
                body: newIssue,
            }),
            invalidatesTags: ["issues"]
        }),
    })
})

export const { useAddIssueMutation } = FixSlice;