import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/user"
import { followService } from "../firebase/backend/services"
import { EDIT } from "../constants/routes"

export default function useProfile(profile) {
    const currentUser = useContext(UserContext)
    const navigate = useNavigate()

    const [btnLoad, setBtnLoad] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const [selfProfile, setSelfProfile] = useState(false)

    useEffect(() => {
        if (!profile) return;
        if (currentUser.uid === profile.uid) {
            setSelfProfile(true)
            return
        }
        const checkIsFollowing = ({ followers }) => {
            const suid = currentUser.uid;
            if (followers.find((uid) => uid === suid))
                setIsFollowing(true)
            else setIsFollowing(false)
        }
        checkIsFollowing(profile)
    }, [profile])

    const doFollow = async (followerCount, setFollowerCount) => {
        const suid = currentUser.uid
        setBtnLoad(true)

        if (selfProfile) {
            navigate(EDIT)
            return
        }
        try {
            await followService(suid, profile.uid, !isFollowing) //if already following then unfollow vice versa
            setBtnLoad(false)
            setFollowerCount(prev => !isFollowing ? followerCount + 1 : followerCount - 1)
            setIsFollowing(!isFollowing)
        } catch (err) {
            console.log(err)
        }
    }

    return { isFollowing, selfProfile, btnLoad, doFollow }

}