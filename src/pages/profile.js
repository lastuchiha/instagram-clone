import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDataByUsername } from '../firebase/backend/services';
import UserProfile from "../components/profile/index"
import Loading from "../components/loading"
import NotFound from './not-found';

export default function Profile() {
    const { username } = useParams();
    const [data, setData] = useState(null)
    const [err, setErr] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserDataByUsername(username)
                if (!data)
                    throw Error("User not found")
                setData(data)
            } catch (err) {
                setErr(true)
            }
        }
        fetchUserData()
    }, [username])
    console.log("data", data)
    return err ? <NotFound /> : (
        data ? <UserProfile {...data} /> : <Loading />
    )
}
