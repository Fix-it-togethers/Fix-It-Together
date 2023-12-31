import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BaseUrl";
import Cookies from "js-cookie";
const getToken = () => {
    return Cookies.get('token');
}
export const UserSlice = createApi({
    reducerPath: 'UserSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (Headers) => {
            const token = getToken();
            if (token) {
                Headers.set("Authorization", `Bearer ${token}`);
            }
            return Headers;
        }
    }),
    tagTypes: ["UserSlice"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => {
                return {
                    url: "/user",
                    method: "GET"
                }
            },
            providesTags: ["UserSlice"]
        })
    })
})

export const { useGetUsersQuery } = UserSlice