import React from 'react'
import { BlogCard } from '../../components/cards/BlogCard'
import style from "../../assets/css/views/blogs.module.css"
import { RecentPostCard } from '../../components/cards/RecentPostCard'
import { Title } from '../../components/ui/Title'
import { AuthorCard } from '../../components/ui/AuthorCard'
import { useGetAllPostsQuery } from '../../store/apiSlices/blogApiSlics'
import { Link, useNavigate } from 'react-router'
import { TopAuthors } from '../../components/ui/TopAuthors'
import { RecentlyPosted } from '../../components/ui/RecentlyPosted'

export const Blogs = () => {

    const skip = 1
    const limit = 2

    const navigate = useNavigate()

    const { data = [], isLoading } = useGetAllPostsQuery({ skip, limit })



    const goToView = ({ id }) => {
        navigate(`view/${id}`)
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <section class={`${style.blog_main_con} pt-5`}>
                <div className="container">

                    <div className="row m-0 p-0">
                        <div className="col-8 row m-0 p-0">

                            {data?.map((res) => {
                                return (
                                    <div className="col-6" onClick={() => goToView(res)}>

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

                        <div className="col-4">
                            <Title title={"Popular"} subtitle={"Posted"} />
                            <br />
                            {data?.map((res) => {
                                return (
                                    <div onClick={() => goToView(res)}>
                                        <BlogCard
                                            name={res?.title}
                                            userName={"Username"}
                                            isPopular={false}
                                            date={"02 december 2022"}
                                            time={"3 min. to read"}
                                            description={res?.body} />
                                    </div>
                                )
                            })}
                        </div>





                    </div>
                </div>

            </section>

            <section className='mt-5'>
                <div className="container">
                    <div className="row m-0">
                        <div className="col-7">

                            <RecentlyPosted />
                        </div>
                        <div className="col-5">
                            <TopAuthors />



                        </div>
                    </div>
                </div>

            </section>

            <br />
            <br />
            <br />
            <br />


        </div>
    )
}
