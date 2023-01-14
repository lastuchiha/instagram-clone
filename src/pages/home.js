import React, { useContext, useEffect, useState } from 'react'
import NoFeed from '../components/nofeed'
import Post from '../components/post/components/index'
import Suggestions from '../components/suggestions'
import UserContext from '../contexts/user'
import { getFeed } from '../firebase/backend/services'

export default function Home() {
    const user = useContext(UserContext)
    const [feed, setFeed] = useState([])

    useEffect(() => {
        const updateFeed = async () => {
            const res = await getFeed(user.username)
            console.log("feed", res)
            setFeed(res)
        }
        updateFeed()

    }, [])

    return (
        <div className="grid grid-cols-3 p-2 max-w-[42rem] mx-auto grow">
            <div className="col-span-3 sm:col-span-2 p-5 overflow-auto">
                {feed.map(postId => <Post userId={user.username} key={postId} postId={postId} />)}
                <hr />
                <NoFeed />
            </div>
            <Suggestions username={user.username} />
        </div>

    )
}
