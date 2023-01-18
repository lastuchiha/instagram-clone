import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import * as ROUTES from "../../../constants/routes"

export default function Head({ postedBy }) {
    return (
        <div className="border-b flex items-center justify-start p-3">
            <img src={postedBy.profileUrl || process.env.PUBLIC_URL + "/DEFAULT.png"} className="w-6 h-6 rounded-full overflow-hidden" alt="no-profile" />
            <div className="grow">
                <Link to={generatePath(ROUTES.PROFILE, { username: postedBy.username })}>
                    <h1 className="font-semibold text-md pl-2 flex items-center justify-start gap-1">
                        {postedBy.username}
                        {postedBy.isOfficial && <span><img className='w-3 inline-block' src={process.env.PUBLIC_URL + "/images/verified.png"} alt="verified" /></span>}
                    </h1>
                </Link>
            </div>
        </div>
    )
}
