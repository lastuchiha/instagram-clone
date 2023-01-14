import React, { useContext, useEffect, useReducer, useState } from 'react'
import { EDIT } from '../../../constants/routes'
import UserContext from "../../../contexts/user"
import { Link } from "react-router-dom"
import { followOrUnfollowUser } from '../../../firebase/backend/services'
const ACTIONS = {
    LOAD: 1,
    ERROR: 2,
    SET_FOLLOWING: 3
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOAD:
            return { ...state, loading: true }

        case ACTIONS.ERROR:
            return { ...state, error: true, loading: false }

        case ACTIONS.SET_FOLLOWING:
            return { following: !state.following, loading: false, error: false }

    }
}
export default function ProfileHeader({ username, fullName, profileUrl, postCount, followerCount, isOfficial, followingCount, bio, isUserFollowing }) {
    const [followState, dispatch] = useReducer(reducer, { following: isUserFollowing, loading: false })
    const [count, setCount] = useState(followerCount)
    const user = useContext(UserContext)

    const handleFollow = async () => {
        try {
            dispatch({ type: ACTIONS.LOAD })
            await followOrUnfollowUser(user.username, username, !followState.following) //if pres follow state if false then we should follow user
            dispatch({ type: ACTIONS.SET_FOLLOWING })
        }
        catch (err) {
            dispatch({ type: ACTIONS.ERROR })
        }

    }

    useEffect(() => {
        const updateFollowerCount = () => {
            if (isUserFollowing && !followState.following) return followerCount - 1;
            if (!isUserFollowing && followState.following) return followerCount + 1;
            return followerCount
        }
        setCount(updateFollowerCount())
    }, [followState])


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

                            : <button onClick={handleFollow} disabled={followOrUnfollowUser.loading}
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
