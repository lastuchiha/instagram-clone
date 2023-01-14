import { useEffect, useState } from "react";
import { getPost } from "../firebase/backend/services";

export default function usePhoto(postId) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchPost = () => {
            getPost(postId).then(data => setData(data))
        }
        fetchPost()

    }, [postId])


    return data
}