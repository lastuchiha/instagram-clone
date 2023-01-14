import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../../contexts/user'
import { getPost } from '../../../firebase/backend/services'
import Image from '../../image'
import Post from "../../post/components/index"

export default function Photos({ posts }) {

    const { username } = useContext(UserContext)

    return (
        <section className='flex items-center justify-center flex-col px-10'>
            <h1 className='text-lg uppercase font-light  tracking-wider border-b px-5'>Posts</h1>

            <section className='flex flex-wrap py-4 w-full gap-5'>
                {/* <img className='w-[33%] grow sm:grow-0 aspect-square object-cover' src={photos?.imageUrl} /> */}
                {posts.length ? posts.map(postId =>
                    // <div key={postId} className='w-[33%] grow sm:grow-0 min-w-[200px] relative'>
                    //     <Post userId={username} postId={postId} profileMode={true} />
                    //     </div>
                    <Image postId={postId} />

                ) :
                    <h1 className='text-center w-full'>No posts yet</h1>
                }
            </section>

        </section>
    )
}
