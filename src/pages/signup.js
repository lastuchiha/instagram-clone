import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Password from '../components/password'
import { checkUsernameExists, signUpService } from '../firebase/backend/services'
import { DASHBOARD, LOGIN } from '../constants/routes'
import * as ERRORS from '../constants/error-msgs'

export default function Signup() {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const invalid = username === '' || fullName === '' || email === '' || password.length < 6

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const doUsernameExists = await checkUsernameExists(username)
            if (doUsernameExists) {
                throw Error(ERRORS.USER_EXISTS)
            }

            await signUpService(email, fullName, username, password)
            navigate(DASHBOARD)
        }
        catch (err) {
            setErr(err.message)
        }

    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <img className='w-[450px] hidden md:block' src="images/iphone-with-profile.jpg" alt="iphone-with-profile" />

            <div className="flex flex-col justify-center gap-3">
                <div className="border bg-white p-10 flex items-center justify-center flex-col  w-[350px]">
                    <img src="images/logo.png" alt="instagram-logo" className="w-[180px] mb-9" />

                    <form className='flex flex-col justify-center w-full' onSubmit={handleSubmit}>
                        <input onChange={e => setEmail(e.target.value)} type="text" className="input" placeholder='Email or phone number' />
                        <input onChange={e => setFullName(e.target.value)} type="text" className="input" placeholder='Full Name' />

                        <input onChange={e => setUsername(e.target.value)} type="text" className="input" placeholder='Username' />
                        <Password password={password} setPassword={setPassword} />
                        <button disabled={invalid} className={`w-full btn ${invalid ? 'btn-invalid' : ''} my-3`}>Sign Up</button>
                        {err && <p className="text-red text-center my-5 text-xs">{err}</p>}
                        <span className='text-center text-xs'>By signing up, you agree to our Terms , <a href="/" className="text-link">Privacy Policy and Cookies Policy .</a></span>
                    </form>

                </div>

                <div className="border text-center bg-white p-5">
                    <span>Have an account? <Link to={LOGIN} className='text-blue font-semibold'>Log In</Link></span>
                </div>
            </div>
        </div>
    )
}
