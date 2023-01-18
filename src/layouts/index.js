import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import { getUserDataByUsername } from '../firebase/backend/services'

export default function Layout() {

    return (
        <>
            <Header />
            <main className='grow md:w-3/4 w-full mt-[55px] mx-auto'>
                <Outlet />
            </main>
        </>
    )
}
