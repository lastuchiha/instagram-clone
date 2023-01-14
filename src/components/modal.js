import React from 'react'

export default function Modal({ showModel, setShowModel, children }) {

    return (
        <div onClick={(e) => setShowModel(false)} className="h-screen bg-black bg-opacity-30 p-5 absolute z-10 left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <div onClick={e => e.stopPropagation()} className=" bg-white rounded-lg max-w-[90%] mx-auto overflow-hidden">
                {children}
            </div>
        </div>

    )
}


