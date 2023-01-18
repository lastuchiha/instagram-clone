import React, { useContext, useState } from 'react'
import Search from './search'
import { signOutService } from '../firebase/backend/services'
import Modal from './modal'
import Upload from './upload'
import UserContext from "../contexts/user"
import { Link, generatePath } from 'react-router-dom'
import * as ROUTES from "../constants/routes"

export default function Header() {

    const [showModel, setShowModel] = useState(false)
    const user = useContext(UserContext)

    return (
        <header className='flex items-center justify-between border-b p-3 bg-white w-full fixed top-0 z-30 lg:px-20 '>
            <div className="w-24 select-none">
                <Link to={ROUTES.DASHBOARD}>
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="instagram-logo" className="w-24 cursor-pointer" />
                </Link>
            </div>
            <Search />
            <ul className="flex items-center justify-start gap-2">
                {user ?
                    (<>
                        <li title='New Post' onClick={e => setShowModel(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>

                        </li>
                        <li>
                            <Link className='block' to={generatePath(ROUTES.PROFILE, { username: user.username })}>
                                <img src={user.profileUrl || (process.env.PUBLIC_URL + "/DEFAULT.png")} className='w-6 h-6 rounded-full' />
                            </Link>
                        </li>
                        <li onClick={signOutService}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </li>
                    </>) :
                    (<>
                        <li>
                            <Link to={ROUTES.LOGIN}>
                                <button className='border bg-lightGray p-2 rounded'>Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES.SIGNUP}>
                                <button className='bg-blue text-white w-22 text-xs p-2 rounded font-semibold'>Sign up</button>
                            </Link>
                        </li>
                    </>)
                }

            </ul>
            {showModel && <Modal showModel={showModel} setShowModel={setShowModel}>{<Upload />}</Modal>}
        </header>
    )
}
