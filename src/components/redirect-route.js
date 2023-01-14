import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../contexts/user'

export default function RedirectRoute({ children, redirectURL }) {
    const user = useContext(UserContext)
    return !user ? children : <Navigate to={redirectURL} />
}
