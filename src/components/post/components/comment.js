import React, { useState } from 'react'

export default function Comment() {
  const [comment, setComment] = useState('')
  return (
    <form className='flex items-center w-full pr-4 bg-lightGray'>
      <input className='w-full p-4 outline-none grow ' placeholder='Add comment...' onChange={(e) => setComment(e.target.value)} />
      <button disabled={comment === ''} className={`${comment ? 'text-blue' : 'text-gray-300'} bg-none font-semibold`}>Post</button>
    </form>
  )
}
