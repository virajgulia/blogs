import { createApi } from '@reduxjs/toolkit/query/react'

import { APIS } from '../../services/endpoints'
import { interceptor } from './interceptos'

export const blogApiSlice = createApi({
    reducerPath: 'blogApiSlice',
    baseQuery: interceptor,
    tagTypes: ['GetAllPostTag'],
    endpoints: builder => ({
        GetAllPosts: builder.query({
            query: ({ skip, limit }) => ({
                url: APIS.getAllPost,
                method: 'GET',
                params: { skip, limit }
            }),
            providesTags: ['GetAllPostTag'],
            transformResponse: response => {
                console.log(response)
                return response || {}
            }

        }),
        GetPostById: builder.query({
            query: (id) => ({
                url: APIS.getPostById + id,
                method: 'GET',
            }),
            transformResponse: response => response || []
        }),
        GetPostByTag: builder.query({
            query: ({ skip, limit, tag }) => ({
                url: APIS.getPostByTag + tag,
                method: 'GET',
                params: { skip, limit }

            }),
            transformResponse: response => response || []
        }),

    })
})

export const {
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useGetPostByTagQuery
} = blogApiSlice
