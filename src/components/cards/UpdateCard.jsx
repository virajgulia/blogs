import React from 'react'
import style from "../../assets/css/components/common.module.css"

export const UpdateCard = ({ title, value }) => {
    return (
        <div className={style.update_card_con}>
            <div className={style.update_card_value}>{value}</div>
            <div className={style.title}>{title}</div>
        </div>
    )
}
