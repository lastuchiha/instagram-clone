import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../contexts/user'
import * as ROUTES from "../constants/routes"

export default function ProtectedRoute({ children }) {
    const user = useContext(UserContext)
    return user ? children : <Navigate to={ROUTES.LOGIN} />
}
