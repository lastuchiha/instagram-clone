import React, { useEffect, useContext } from 'react'
import UserContext from "../../contexts/user"
import ProfileHeader from "./components/header"
import Photos from './components/photos'
export default function UserProfile(props) {
  const { username } = useContext(UserContext)

  const payload = {
    isUserFollowing: !!props.followers.filter((user) => user === username).length,
    followerCount: props.followers.length,
    followingCount: props.following.length,
    postCount: props.posts.length
  }

  return (
    <section className='border h-full'>
      <ProfileHeader {...props} {...payload} />
      <Photos posts={props.posts} />
    </section>
  )
}
