import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { HeaderFooterLayout } from './layout/HeaderFooterLayout'
import { Blogs } from './views/blogs/Blogs'
import { ViewBlog } from './views/blogs/ViewBlog'

export const Router = () => {


    let router = createBrowserRouter([
        {
            element: <HeaderFooterLayout />,
            children: [
                {
                    path: "",
                    children: [
                        {
                            index: true,
                            element: <Blogs />
                        },
                        {
                            path: "view/:id",
                            element: <ViewBlog />
                        }
                    ]
                },

            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}
