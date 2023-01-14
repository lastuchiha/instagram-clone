import React, { useContext, useEffect, useState } from 'react'
import { EDIT } from '../../../constants/routes'
import UserContext from "../../../contexts/user"
import { Link } from "react-router-dom"
import useFollow from '../../../hooks/useFollow'

export default function ProfileHeader({ username, fullName, profileUrl, postCount, followerCount, isOfficial, followingCount, bio, isUserFollowing }) {
    const [count, setCount] = useState(followerCount)
    const user = useContext(UserContext)
    const { followState, handleFollow } = useFollow(user, username, isUserFollowing)


    useEffect(() => {
        const updateFollowerCount = () => {
            if (isUserFollowing && !followState.following) return followerCount - 1;
            if (!isUserFollowing && followState.following) return followerCount + 1;
            return followerCount
        }
        setCount(updateFollowerCount())
    }, [followState, isUserFollowing, followerCount])


    return (
        <div className='flex items-center justify-center  p-10 gap-x-20 gap-y-5 flex-wrap select-none'>
            <div className="w-40">
                <img src={profileUrl} alt={username + "-profile-pic"} className="h-full aspect-square rounded-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center sm:items-start ">
                <div className="flex gap-5 items-center justify-center flex-wrap">
                    <h1 className="font-light text-2xl whitespace-nowrap">{username + ''} <span title="Verified account">{isOfficial && <img className='w-5 inline' src='/images/verified.png' alt="verified" />}</span></h1>
                    {
                        user.username === username ?
                            <Link to={EDIT}><button className='bg-white border text-black p-2 rounded font-semibold'>Edit Profile</button></Link>

                            : <button onClick={handleFollow} disabled={followState.loading}
                                className={`p-2 rounded w-20 text-xs font-semibold
                        ${!followState.following ? 'bg-blue text-white' : 'bg-white outline outline-1 outline-gray-200 text-black'}`}>
                                {followState.following ? "Following" : "Follow"}
                            </button>
                    }
                </div>

                <div className="flex flex-wrap gap-x-7 justify-center">
                    <h3 className="font-semibold text-md text-center">
                        <span className='font-bold'>{postCount}</span>
                        {' posts'}
                    </h3>
                    <h3 className="font-semibold w-20 text-md text-center">
                        <span className='font-bold'>{count}</span>
                        {` follower${count === 1 ? '' : 's'}`}
                    </h3>
                    <h3 className="font-semibold text-md text-center">
                        <span className='font-bold'>{followingCount}</span>
                        {" following"}
                    </h3>
                </div>

                <h4 className='text-md font-semibold'>{fullName}</h4>
                <h4 className='text-md'>{bio}</h4>

            </div>
        </div>
    )
}
