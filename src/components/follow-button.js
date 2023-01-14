import React, { useContext } from 'react'
import ProfileHookContext from '../contexts/profile-hook'

export default function FollowButton({ followerCount, setFollowerCount }) {
    const { doFollow, btnLoad, isFollowing, selfProfile } = useContext(ProfileHookContext)
    return (
        <button disabled={btnLoad} className={`btn p-1 rounded w-20 text-xs ${(isFollowing || selfProfile) && 'bg-lightGray border text-black'}`} onClick={() => doFollow(followerCount, setFollowerCount)}>
            {selfProfile ? 'Edit Profile' : isFollowing ? 'Following' : 'Follow'}
        </button>
    )
}
