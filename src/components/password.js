import React, { useState } from 'react'

export default function Password({ setPassword, password }) {

    const doShow = password !== ''
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='input flex items-center justify-center py-0'>
            <input type={showPassword ? 'text' : 'password'} value={password} className="py-2 bg-lightGray grow outline-none" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            {doShow && <span className='font-semibold cursor-pointer hover:text-gray-500 select-none' onClick={() => setShowPassword(prev => !prev)}>{showPassword ? 'Hide' : 'Show'}</span>}
        </div>
    )
}
