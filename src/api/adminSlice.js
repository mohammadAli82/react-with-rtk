import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query";
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ['accounts'],
        }),
    })
});

export const { useGetAccountsQuery } = adminApi;
