import React from 'react'

export default function Loading() {
    return (
        <div className='h-screen bg-lightGray flex items-center justify-center'>
            <img src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="instagram-logo" className="w-20" />
        </div>
    )
}
