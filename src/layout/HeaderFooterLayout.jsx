import React from 'react'
import { Header } from '../components/header/Header'
import { Outlet } from 'react-router'
import { Footer } from '../components/footer/Footer'

export const HeaderFooterLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
