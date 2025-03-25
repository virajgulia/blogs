import React, { useState } from 'react'
import { useGetAllPostsQuery, useGetPostByTagQuery } from '../../store/apiSlices/blogApiSlics'
import { Title } from './Title'
import { BlogCard } from '../cards/BlogCard'
import { useNavigate } from 'react-router'
import { CustomPagination } from '../pagination/CustomPagination'

export const RecentlyPosted = ({ selectedTag }) => {

    const totalData = 10
    const [page, setPage] = useState(2)
    const perPageData = 20
    const navigate = useNavigate()


    const { data: { posts = [], total = 0 } = {}, isLoading } =
        !!selectedTag ? useGetPostByTagQuery({ tag: selectedTag, skip: page, limit: perPageData }) : useGetAllPostsQuery({ skip: page, limit: perPageData })


    const goToView = ({ id }) => {
        navigate(`view/${id}`)
    }

    if (!isLoading && !(!!posts?.length)) {
        return (
            <div>No Data Available...</div>
        )
    }

    return (
        <div>
            <Title title={"Recently"} subtitle={"Posted"} />
            <div className="row m-0">
                {posts?.map((res) => {
                    return (
                        <div key={res.id} onClick={() => goToView(res)} className='mt-4 col-6 p-4'>
                            <BlogCard
                                name={res?.title}
                                label={"Travel"}
                                userName={"Username"}
                                date={"02 december 2022"}
                                time={"3 min. to read"}
                                description={res?.body} />
                        </div>
                    )
                })}
            </div>
            <br />
            <CustomPagination
                totalCount={total}
                onPageChange={setPage}
                currentPage={page}
                pageSize={perPageData}
            />

        </div>
    )
}
