import React, { useContext, useEffect, useState } from 'react'
import { commentPost } from '../../../firebase/backend/services'
import formatTime from "../../../helpers/formatTime"
import UserContext from "../../../contexts/user"

export default function Comment({ comments, postedAt, postId }) {

  const [comment, setComment] = useState('')
  const [filteredComments, setFilteredComments] = useState(comments.slice(-3))
  const { username } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    commentPost(postId, username, comment)
      .then(() => setFilteredComments(prev => [...(prev.slice(-2)), { username, comment }]))
      .finally(() => setComment(''))
  }

  return (
    <div className='pt-1'>
      <ul className='flex flex-col gap-y-1 pb-1'>
        {filteredComments.map((comment, i) => <li key={i} className='flex items-center justify-start gap-x-2 px-4 '>
          <h2 className='font-semibold'>{comment.username}</h2>
          <p>{comment.comment}</p>
        </li>)}
      </ul>
      <p className='text-gray-500 text-xs px-4 pb-2'>{formatTime(postedAt)}</p>
      <form onSubmit={handleSubmit} className='flex items-center w-full pr-4 bg-lightGray border-t'>
        <input value={comment} className='w-full p-4 outline-none grow ' placeholder='Add comment...' onChange={(e) => setComment(e.target.value)} />
        <button disabled={comment === ''} className={`${comment ? 'text-blue' : 'text-gray-300'} bg-none font-semibold`}>Post</button>
      </form>
    </div>
  )
}
