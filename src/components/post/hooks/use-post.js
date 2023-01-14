import { useEffect, useReducer } from "react";
import { getPost, likePost } from "../../../firebase/backend/services";

const INITIAL_STATE = {
    post: null,
    likeCount: 0,
    userLiked: false
}

const reducer = (state, newState) => ({ ...state, ...newState })
const checkUserLiked = (likes, userId) => !!likes.filter(likedId => likedId === userId).length

export default function usePost(userId, postId) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(postId);
            if (post) {
                dispatch({ post, likeCount: post.likes.length, userLiked: checkUserLiked(post.likes, userId) })
            }
        }
        fetchPost()
    }, [postId, userId])

    const doLike = async (op) => {
        await likePost(postId, userId, op)
    }


    return { ...state, doLike, dispatch }
}