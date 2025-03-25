import React from 'react'
import style from "../../assets/css/components/common.module.css"

export const Title = ({ title, subtitle }) => {
    return (
        <div className={style.title_main_con}>
            <span className={style.title}>{title}</span>&nbsp;
            <span className={style.subtitle}>{subtitle}</span>
        </div>
    )
}
