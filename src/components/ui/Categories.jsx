import React from 'react'
import { Title } from './Title'
import { CATEGORIES } from '../../constants/constants'
import style from "../../assets/css/components/common.module.css"

export const Categories = () => {


    return (
        <div className={style.category_con}>
            <Title title={"Categories"} />
            <br />
            {CATEGORIES?.map((res) => {
                return (
                    <div className={`d-flex justify-content-between ${style.category_item}`}>
                        <div>{res?.title}</div>
                        <div>{res?.value}</div>
                    </div>
                )
            })}

        </div>
    )
}
