import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Body({ imageUrl }) {
    const [imgLoading, setImgLoading] = useState(true)
    return (
        <div className='w-full'>
            {imgLoading && <Skeleton className='w-full aspect-square' />}
            <img
                src={imageUrl} alt="img"
                className='w-full object-cover aspect-square select-none'
                onLoad={() => setImgLoading(false)}
            />
        </div>
    )
}
