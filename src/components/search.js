import React, { useCallback, useEffect, useState } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { searchService } from '../firebase/backend/services'
import debounce from '../helpers/debounce'
import * as ROUTES from "../constants/routes"


const fetchUsers = debounce((searchQuery, setResult) =>
    searchService(searchQuery)
        .then(data => setResult(data),
            1000))

export default function Search() {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    useEffect(() => {
        if (!search) return
        fetchUsers(search, setResult)
    }, [search])


    return (
        <label htmlFor="search" className="border px-2 bg-lightGray items-center w-80 relative justify-center hidden md:flex">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input type="text" id="search" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="ml-2 py-2 outline-none grow" />

            {search && <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setSearch('')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}


            {search && <div className="absolute border shadow top-[110%] z-20 w-full bg-white ">
                <ul>
                    {result.length
                        ? result.map(profile => <li key={profile.username} className='border-b p-4'>
                            <Link to={generatePath(ROUTES.PROFILE, { username: profile.username })} onClick={() => setSearch('')}>
                                <div className='flex items-center justify-start gap-x-2'>
                                    <img className='w-5 h-5 rounded-full' src={profile.profileUrl || process.env.PUBLIC_URL + "/DEFAULT.png"} alt="profile" />
                                    <h2 className='font-semibold'>{profile.username}</h2>
                                </div>
                            </Link>
                        </li>)
                        : <li className='font-semibold p-4'>No Users Found</li>
                    }

                </ul>
            </div>}
        </label>
    )
}
