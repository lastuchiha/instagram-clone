import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Container({ isLoading, children }) {
    return (
        <div className='border rounded w-full mb-5 bg-white'>
            {!isLoading ? children : <Skeleton className='w-full aspect-[4/5]' />}
        </div>
    )
}
