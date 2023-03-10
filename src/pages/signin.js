import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Password from '../components/password'
import { signInService } from '../firebase/backend/services'
import { DASHBOARD, SIGNUP } from '../constants/routes'
import { RotatingLines } from 'react-loader-spinner'

export default function Signin() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const invalid = username === '' || password.length < 6

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (invalid) return;

        setLoading(true)

        try {
            await signInService(username, password)
            navigate(DASHBOARD)

        } catch (err) {
            setUsername('')
            setPassword('')
            setErr("Invalid Email or Password")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <img className='w-[450px] hidden md:block' src={process.env.PUBLIC_URL + "/images/iphone-with-profile.jpg"} alt="iphone-with-profile" />

            <div className="flex flex-col justify-center gap-3">
                <div className="border bg-white p-10 flex items-center justify-center flex-col  w-[350px]">
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="instagram-logo" className="w-[180px] mb-9" />

                    <form className='flex flex-col justify-center w-full' onSubmit={handleSubmit}>
                        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="input" placeholder='Phone number, email or username' />
                        <Password password={password} setPassword={setPassword} />
                        <button disabled={invalid || loading} className={`w-full btn ${invalid || loading ? 'btn-invalid' : ''} my-3 flex items-center justify-center`}>
                            <RotatingLines width='20' visible={loading} strokeColor={"white"} strokeWidth="3" animationDuration="0.75" />
                            {loading ? "Logging in" : "Log in"}</button>
                        {err && <p className="text-red text-center my-5 text-xs">{err}</p>}
                        <span className='text-center'><a href="/" className="text-link text-xs">Forgot password?</a></span>
                    </form>

                </div>

                <div className="border text-center bg-white p-5">
                    <span>Don't have an account? <Link to={SIGNUP} className='text-blue font-semibold'>Sign up</Link></span>
                </div>
            </div>
        </div>
    )
}
