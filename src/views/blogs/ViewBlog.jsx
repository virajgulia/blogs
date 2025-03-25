import React from 'react'
import { useParams } from 'react-router'
import { useGetPostByIdQuery } from '../../store/apiSlices/blogApiSlics'
import { BLOGIMAGE } from '../../constants/constants'
import style from "../../assets/css/views/blogs.module.css"
import { TopAuthors } from '../../components/ui/TopAuthors'

export const ViewBlog = () => {

    const { id } = useParams()

    const { data, isLoading } = useGetPostByIdQuery(id)
    console.log(data)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className={style.viewBlog_con}>
            <div className="container mt-4">

                <div className="row m-0">
                    <div className="col-8">


                        <div className={style.name}>{data?.title}</div>
                        <div className={style.user_data}>
                            <div>{"Jesica Koli"}</div>
                        </div>
                        <br />
                        <div>
                            <img className={style.blog_image} src={BLOGIMAGE} />
                        </div>
                        <br />
                        <div className={style.description}>{data?.body}</div>
                    </div>
                    <div className="col-4">
                        <TopAuthors />
                    </div>
                </div>
            </div>
        </div>
    )
}
