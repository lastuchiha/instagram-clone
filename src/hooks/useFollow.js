import { useReducer } from "react"
import { followOrUnfollowUser } from "../firebase/backend/services"

const ACTIONS = {
    LOAD: 1,
    ERROR: 2,
    SET_FOLLOWING: 3
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOAD:
            return { ...state, loading: true }

        case ACTIONS.SET_FOLLOWING:
            return { following: !state.following, loading: false, error: false }

        default:
            return { ...state, error: true, loading: false }

    }
}

export default function useFollow(user, username, isUserFollowing) {
    const [followState, dispatch] = useReducer(reducer, { following: isUserFollowing, loading: false });

    const handleFollow = async () => {
        try {
            dispatch({ type: ACTIONS.LOAD })
            //if user already following then do unfollow vice versa
            await followOrUnfollowUser(user.username, username, !followState.following)
            dispatch({ type: ACTIONS.SET_FOLLOWING })
        }
        catch (err) {
            dispatch({ type: ACTIONS.ERROR })
        }

    }

    return { followState, handleFollow }


}