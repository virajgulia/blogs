import { createApi } from '@reduxjs/toolkit/query/react'

import { APIS } from '../../services/endpoints'
import { interceptor } from './interceptos'

export const tagApiSlice = createApi({
    reducerPath: 'tagApiSlice',
    baseQuery: interceptor,
    tagTypes: ['GetAllTagTag'],
    endpoints: builder => ({
        GetAllTags: builder.query({
            query: ({ skip, limit }) => ({
                url: APIS.getAllTags,
                method: 'GET',
                params: { skip, limit }
            }),
            providesTags: ['GetAllTagTag'],
            transformResponse: response => {
                console.log(response)
                return response || {}
            }

        }),
    })
})

export const {
    useGetAllTagsQuery,

} = tagApiSlice
