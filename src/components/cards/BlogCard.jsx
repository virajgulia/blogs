import React from 'react'
import style from "../../assets/css/components/cards.module.css"
import { BLOGIMAGE } from '../../constants/constants'


export const BlogCard = ({ name, userName, date, isPopular = true, label, time, description }) => {



    return (
        <div className={style.blog_card_con}>
            {label && <span className={style.label}>{label}</span>}
            <div className={style.name}>{name}</div>
            {isPopular && <div className={style.image}>
                <img src={BLOGIMAGE} />
            </div>}

            <div className={`${style.user_data} my-3 d-flex justify-content-between`}>
                <div>{userName}</div>
                <div>{date}</div>
                <div>{time}</div>

            </div>
            <div className={style.description}>{description}</div>
        </div>
    )
}
