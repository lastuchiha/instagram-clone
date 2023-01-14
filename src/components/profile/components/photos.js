import React, { useContext } from 'react'
import Image from '../../image'

export default function Photos({ posts }) {

    return (
        <section className='flex items-center justify-center flex-col px-10'>
            <h1 className='text-lg uppercase font-light  tracking-wider border-b px-5'>Posts</h1>

            <section className='flex flex-wrap py-4 w-full gap-5'>
                {posts.length ? posts.map(postId =>
                    <Image postId={postId} key={postId} />

                ) :
                    <h1 className='text-center w-full'>No posts yet</h1>
                }
            </section>

        </section>
    )
}
