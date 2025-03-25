import React from 'react'
import { useGetAllTagsQuery } from '../../store/apiSlices/tagApislice'
import { Title } from './Title'
import style from "../../assets/css/components/common.module.css"

export const BlogSearching = ({ selectedTag, setSeletedTag }) => {

    const { data = [] } = useGetAllTagsQuery({ skip: 1, limit: 20 })


    console.log(data)

    return (
        <div className={style.blog_searching_con}>
            <Title title={"Search"} subtitle={"With Tags"} />
            <br />
            <div className="d-flex flex-wrap gap-3">
                {data?.map((res) => {
                    return (
                        <div
                            onClick={() => setSeletedTag(res)}
                            className={`${style.tag_item} ${selectedTag === res && style.selected_tag_item}`}>{res}</div>
                    )
                })}
            </div>
        </div>
    )
}
