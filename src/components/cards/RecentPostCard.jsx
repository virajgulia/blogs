import React from 'react'
import style from "../../assets/css/components/cards.module.css"
import { BLOGIMAGE } from '../../constants/constants'


export const RecentPostCard = ({ name, userName, date, isPopular = true, label, time, description }) => {
    return (
        <div className={`${style.recent_post_card_con} ${style.blog_card_con}`}>


            <div className='row m-0'>
                <div className={`${style.image} col-4 p-0`}>
                    <img src={BLOGIMAGE} />
                </div>
                <div className='col-8'>
                    <span className={style.label}>{label}</span>
                    <div className={style.name}>{name}</div>
                    <div className={`${style.user_data} d-flex justify-content-between`}>
                        <div>{userName}</div>
                        <div>{date}</div>
                        <div>{time}</div>

                    </div>
                    <div className={style.description}>{description}</div>
                </div>
            </div>




        </div>
    )
}
