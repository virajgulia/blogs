import React from 'react'
import style from "../../assets/css/components/header.module.css"
import { Logo } from '../logo/Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={style.header_main_con}>
            <div className="row m-0 align-items-center">
                <div className={`col-6 py-1 ${style.nav_items_con}`}>
                    <ul className='d-flex gap-4 w-100'>
                        <li className='pointer' onClick={() => navigate("")}>Home Pages</li>
                        <li>About</li>
                        <li>Categories</li>
                        <li>Pages</li>
                    </ul>
                </div>
                <div className="col-3 d-flex justify-content-center"> <Logo /></div>
                <div className={`col-3 ${style.nav_items_con}`}  >
                    <ul className='d-flex gap-3'>
                        <li>
                            <CiSearch />
                        </li>
                        <li>
                            <FaRegEdit />
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>En</li>
                        <li><FaRegMoon /></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
