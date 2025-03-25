import React from 'react'
import style from "../../assets/css/components/common.module.css"

export const Logo = () => {
    return (
        <div className={style.logo_main_con}>
            <span className={style.note}>Note</span>
            <span className={style.book}>Book<span className={style.dot}>.</span></span>
        </div>
    )
}
