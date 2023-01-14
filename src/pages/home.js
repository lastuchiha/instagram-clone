import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header'
import NoFeed from '../components/nofeed'
import Post from '../components/post/components/index'
import Suggestions from '../components/suggestions'
import UserContext from '../contexts/user'
import { getFeed, getSuggestions } from '../firebase/backend/services'

export default function Home() {
    const user = useContext(UserContext)
    const [feed, setFeed] = useState([])

    useEffect(() => {
        const updateFeed = async () => {
            const res = await getFeed(user.username)
            console.log(res)
            setFeed(res)
        }
        updateFeed()

    }, [])

    return (
        <div className="grid grid-cols-3 p-2 max-w-[42rem] mx-auto grow">
            <div className="col-span-3 sm:col-span-2 p-5 overflow-auto">
                {/* <Post userId={user.username} postId={"SBO0fi0d8qo77F80jB2V"} /> */}
                {feed.map(postId => <Post userId={user.username} key={postId} postId={postId} />)}
                <hr />
                <NoFeed />
            </div>
            <Suggestions username={user.username} />
        </div>

    )
}
