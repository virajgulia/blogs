import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// set headers to all apis which are call threw rtk
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

})

export const interceptor = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)
    // here check apis response 

    return result
}
