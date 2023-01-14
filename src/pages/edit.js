import React, { useContext, useEffect, useState } from 'react'
import Modal from '../components/modal'
import Upload from '../components/upload'
import UserContext from '../contexts/user'
import { checkUsernameExists, getUserDataByUsername } from '../firebase/backend/services'

export default function Edit() {

    const [form, setForm] = useState(null)
    const [err, setErr] = useState('')
    const [showModal, setShowModel] = useState(false)

    useEffect(() => {
        document.title = "Edit - Instagram"
    }, [])

    const { username } = useContext(UserContext)

    useEffect(() => {
        const fetchUser = async () => {
            const { fullName, email, bio, profileUrl } = await getUserDataByUsername(username)
            setForm({
                name: fullName,
                username,
                email,
                bio,
                profileUrl,
                isValid: false
            })
        }


        fetchUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm({ ...form, isValid: false })
        if (username !== form.username && await checkUsernameExists(form.username)) {
            setErr(`Username ${form.username} already exists`)
            return;
        }
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0]
    }

    return (
        <section className='p-10 border h-full text-md '>
            {form ? <form className='w-[300px] mx-auto flex flex-col items-center justify-center gap-3' onSubmit={handleSubmit}>
                <div htmlFor="profilePic" className="flex w-full items-center flex-col gap-2">
                    <img src={form.profileUrl} className="rounded-full w-12 aspect-square object-cover" alt={`${username}'s profile-pic`} />
                    <span className='text-blue cursor-pointer' onClick={() => setShowModel(true)}>Change Profile</span>
                </div>
                <label className='flex w-full items-center' htmlFor="username" >
                    <span className='w-[25%] text-left font-semibold cursor-pointer'>Username:</span>
                    <input type={"text"} value={form.username} className='border p-2 grow' id="username" onChange={({ target }) => setForm({ ...form, username: target.value, isValid: true })} />
                </label>
                <label className='flex w-full items-center' htmlFor="email">
                    <span className='w-[25%] text-left font-semibold cursor-pointer'>Email:</span>
                    <input value={form.email} onChange={({ target }) => setForm({ ...form, email: target.value, isValid: true })} type={"email"} className='border p-2 grow' id="email" />
                </label>
                <label className='flex w-full items-center' htmlFor="name">
                    <span className='w-[25%] text-left font-semibold cursor-pointer'>Name:</span>
                    <input value={form.name} onChange={({ target }) => setForm({ ...form, name: target.value, isValid: true })} type={"text"} className='border p-2 grow' id="name" />
                </label>
                <label className='flex w-full items-center' htmlFor="bio">
                    <span className='w-[25%] text-left font-semibold cursor-pointer'>Bio:</span>
                    <input value={form.bio} onChange={({ target }) => setForm({ ...form, bio: target.value, isValid: true })} type={"text"} className='border p-2 grow' id="bio" />
                </label>
                <p className='text-red'>{err}</p>

                <button disabled={!form.isValid} className={`btn ${!form.isValid && 'bg-lightBlue cursor-not-allowed'}`}>Submit</button>
                {showModal && <Modal><Upload /></Modal>}
            </form>
                : <h1>Loading...</h1>}
        </section>
    )
}
