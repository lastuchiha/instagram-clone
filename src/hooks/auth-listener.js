import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/backend/config";
import { getUserDataByUsername, getUsernameByUID } from "../firebase/backend/services";

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (currentUser) => {
            //user logged in
            if (currentUser) {
                const { username } = await getUsernameByUID(currentUser.uid)
                const { profileUrl } = await getUserDataByUsername(username)
                localStorage.setItem("authUser", JSON.stringify({ ...currentUser, username, profileUrl }));
                setUser({ ...currentUser, username, profileUrl })
            } else {
                //user logged out
                localStorage.removeItem("authUser")
                setUser(null)
            }
        })

        return () => listener() //clean up
    }, [])

    return user
}