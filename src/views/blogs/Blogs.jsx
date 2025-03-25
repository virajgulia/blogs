import React, { useState } from 'react'
import { BlogCard } from '../../components/cards/BlogCard'
import style from "../../assets/css/views/blogs.module.css"
import { RecentPostCard } from '../../components/cards/RecentPostCard'
import { Title } from '../../components/ui/Title'
import { AuthorCard } from '../../components/ui/AuthorCard'
import { useGetAllPostsQuery } from '../../store/apiSlices/blogApiSlics'
import { Link, useNavigate } from 'react-router'
import { TopAuthors } from '../../components/ui/TopAuthors'
import { RecentlyPosted } from '../../components/ui/RecentlyPosted'
import { Categories } from '../../components/ui/Categories'
import { TodaysUpdate } from '../../components/ui/TodaysUpdate'
import { BlogSearching } from '../../components/ui/BlogSearching'

export const Blogs = () => {

    const skip = 1
    const limit = 6

    const [selectedTag, setSeletedTag] = useState("life")

    const navigate = useNavigate()

    const { data: { posts = [] } = [], isLoading, isError } = useGetAllPostsQuery({ skip, limit })



    const goToView = ({ id }) => {
        navigate(`view/${id}`)
    }


    return (
        <div>
            <section class={`${style.blog_main_con} pt-5`}>
                <div className="container">

                    <div className="row m-0 p-0">
                        <div className="col-8 row m-0 p-0" style={{ height: "50vh", overflow: "auto" }}>

                            {!isError ? (
                                (isLoading) ? <div>Loading...</div> : posts?.map((res) => {
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
                                })) :
                                <div>Some Error occured !</div>
                            }

                        </div>

                        <div className="col-4" style={{ height: "50vh", overflow: "auto" }}>
                            <Title title={"Popular"} subtitle={"Posted"} />
                            <br />
                            {posts?.map((res) => {
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

                            <RecentlyPosted selectedTag={selectedTag} />
                        </div>
                        <div className="col-5">
                            <TopAuthors />
                            <br />
                            <Categories />
                            <br />
                            <TodaysUpdate />
                            <br />
                            <BlogSearching
                                selectedTag={selectedTag} setSeletedTag={setSeletedTag}
                            />
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
