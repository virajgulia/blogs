import React from 'react'
import style from "../../assets/css/components/common.module.css"

export const AuthorCard = ({ name, img, description }) => {
    return (
        <div className={`d-flex align-items-center gap-3 ${style.author_card_con}`}>

            <div className={style.author_image}></div>
            <div>
                <div className={style.author_name}>{name}</div>
                <br />
                <div className={style.author_description}>{description}</div>
            </div>
        </div>
    )
}
