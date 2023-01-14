import React, { useContext, useEffect, useState } from 'react'
import NoFeed from '../components/nofeed'
import Post from '../components/post/components/index'
import Suggestions from '../components/suggestions'
import UserContext from '../contexts/user'
import Loading from "../components/loading"
import { getFeed } from '../firebase/backend/services'
import Skeleton from 'react-loading-skeleton'

export default function Home() {
    const user = useContext(UserContext)
    const [feed, setFeed] = useState(null)

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
                {feed ?
                    feed.map(postId => <Post userId={user.username} key={postId} postId={postId} />) :
                    <Skeleton className='aspect-[4/5] mb-5' />
                }
                <hr />
                <NoFeed />
            </div>
            <Suggestions username={user.username} />
        </div>

    )
}
