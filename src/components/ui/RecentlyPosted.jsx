import React, { useState } from 'react'
import { useGetAllPostsQuery } from '../../store/apiSlices/blogApiSlics'
import { Title } from './Title'
import { BlogCard } from '../cards/BlogCard'
import { useNavigate } from 'react-router'

export const RecentlyPosted = () => {

    const totalData = 10
    const [page, setPage] = useState(0)
    const perPageData = 2
    const navigate = useNavigate()


    const { data = [], isLoading } = useGetAllPostsQuery({ skip: page, limit: perPageData })

    const goToView = ({ id }) => {
        navigate(`view/${id}`)
    }

    return (
        <div>
            <Title title={"Recently"} subtitle={"Posted"} />

            <div className="row m-0">

                {data?.map((res) => {
                    return (
                        <div key={res.id} onClick={() => goToView(res)} className='mt-4 col-6'>
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
        </div>
    )
}
