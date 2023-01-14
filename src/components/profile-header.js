import React, { useContext, useState } from 'react'
import ProfileContext from '../contexts/profile'
import FollowButton from './follow-button'

export default function ProfileHeader() {
    const { username, followers, following, posts, fullName, isOfficial, profileUrl } = useContext(ProfileContext)

    const [followerCount, setFollowerCount] = useState(followers.length)
    return (
        <div className='flex items-center justify-center  p-10 gap-x-20 gap-y-5 flex-wrap select-none'>
            <div className="w-40">
                <img src={profileUrl} alt={username + "-profile-pic"} className="h-full aspect-square rounded-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center sm:items-start ">
                <div className="flex gap-5 items-center justify-center flex-wrap">
                    <h1 className="font-light text-2xl whitespace-nowrap">{username} {isOfficial && <span title="Verified account"><img className='w-5 inline' src='/images/verified.png' alt="verified" /></span>}</h1>
                    <FollowButton followerCount={followerCount} setFollowerCount={setFollowerCount} />
                </div>

                <div className="flex flex-wrap gap-x-7 justify-center">
                    <h3 className="font-semibold text-md text-center"><span className='font-bold'>{posts.length}</span> posts</h3>
                    <h3 className="font-semibold w-20 text-md text-center"><span className='font-bold'>{followerCount}</span> {`follower${followerCount === 1 ? '' : 's'}`}</h3>
                    <h3 className="font-semibold text-md text-center"><span className='font-bold'>{following.length}</span> following</h3>
                </div>

                <h4 className='text-md font-semibold'>{fullName}</h4>
                <h4 className='text-md'>Mansika alasata!</h4>

            </div>
        </div>
    )
}
