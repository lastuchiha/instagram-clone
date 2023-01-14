import React, { useContext } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PROFILE } from '../../../constants/routes'
import UserContext from '../../../contexts/user'
import useFollow from '../../../hooks/useFollow'

export default function Suggestion({ profile }) {
    const user = useContext(UserContext)
    const { followState, handleFollow } = useFollow(user, profile.username, false)

    return (
        <div className='flex items-center justify-center p-1  w-48'>
            <div className="w-10 h-10 flex items-center justify-center">
                <img src={profile.profileUrl} alt={profile.username + "-profile-pic"} className="w-6 aspect-square rounded-full" />
            </div>

            <div className="grow flex  items-center justify-between">
                <Link to={generatePath(PROFILE, { username: profile.username })}>
                    <h1 className="font-semibold text-md cursor-pointer">{profile.username}</h1>
                </Link>
                <h3 onClick={handleFollow} disabled={followState.loading}
                    className='font-bold text-blue cursor-pointer'>
                    {!followState.following ? 'Follow' : 'Following'}
                </h3>
            </div>
        </div>
    )
}
