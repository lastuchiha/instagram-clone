import React, { useState } from 'react'

export default function Search() {

    const [search, setSearch] = useState('')

    return (
        <label htmlFor="search" className="border px-2 bg-lightGray items-center w-80 relative justify-center hidden md:flex">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input type="text" id="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="ml-2 py-2 outline-none grow" />

            {search && <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setSearch('')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}


            {/* <div className="absolute border shadow top-[110%] z-20">
                hello
            </div> */}
        </label>
    )
}
