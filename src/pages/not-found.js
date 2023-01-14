import React from 'react'
import { PAGE_NOTFOUND_DES, PAGE_NOTFOUND_TITLE } from '../constants/error-msgs'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 mt-[20%]">
            <h1 className="font-light text-3xl">{PAGE_NOTFOUND_TITLE}</h1>
            <h2 className='text-md'>{PAGE_NOTFOUND_DES}</h2>
        </div>
    )
}
