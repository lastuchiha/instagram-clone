import React, { useEffect, useReducer } from 'react'
import Skeleton from 'react-loading-skeleton'
import { getSuggestions } from '../../firebase/backend/services'
import Suggestion from './components/suggestion'

const INITIAL_STATE = {
    suggestedProfiles: [],
    loading: true
}

const render = (state, newState) => ({ ...state, ...newState })

export default function Suggestions({ username }) {

    const [state, dispatch] = useReducer(render, INITIAL_STATE)

    useEffect(() => {
        const getSuggestedProfiles = async () => {
            const suggestedProfiles = await getSuggestions(username)
            console.log(suggestedProfiles)
            dispatch({ suggestedProfiles, loading: false })
        }

        getSuggestedProfiles()
    }, [username])

    return (
        <div className="p-4 hidden sm:block">
            <h1 className='font-semibold'>Suggestion for you</h1>
            {state.loading ?
                <Skeleton count={4} className="p-1 mt-1" /> :
                state.suggestedProfiles.map(suggestedProfile => {
                    return <Suggestion key={suggestedProfile.username} profile={suggestedProfile} />
                })}
        </div>
    )
}
