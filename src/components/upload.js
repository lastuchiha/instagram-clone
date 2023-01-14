import React, { useCallback, useContext, useState } from 'react'
import Cropper from 'react-easy-crop'
import { submitPost } from '../firebase/backend/services';
import UserContext from "../contexts/user"
import getCroppedImg from '../helpers/croppedImage';

export default function Upload() {
    const [img, setImg] = useState('')
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [result, setResult] = useState(null)
    const { username } = useContext(UserContext)
    const [loading, setLoading] = useState({ state: false, message: "Submit" })

    const showPreview = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        setImg(url)
    }

    const onCropComplete = useCallback(async (croppedArea, croppedAreaPixels) => {
        // console.log(croppedArea, croppedAreaPixels);
        setResult(croppedAreaPixels)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading({ state: true, message: "Uploading" })
        getCroppedImg(img, result)
            .then((res) => {
                submitPost(res, username);
                setLoading({ state: false, message: "Uploaded" })
            })
            .catch(() => {
                setLoading({ state: false, message: "Upload Failed! Try again" })
            })
    }

    return (
        <form onSubmit={handleSubmit} className="w-[500px] max-w-full flex flex-col items-center justify-center mx-auto overflow-hidden">
            {img ? (
                <div className='w-full'>
                    <h1 className='text-center text-md font-semibold p-3'>Crop Your image</h1>
                    <div className='relative aspect-square w-full object-cover'>
                        <Cropper
                            image={img}
                            aspect={1 / 1}
                            crop={crop}
                            zoom={zoom}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            className='bg-black'
                        />
                    </div>
                </div>)
                : (
                    <>
                        <input onChange={showPreview}
                            type="file" id="upload-post" className='hidden' accept='image/jpeg, image/png' />
                        <label htmlFor='upload-post' className='grow flex flex-col items-center justify-center p-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <h1 className='text-2xl font-light text-center'>Drag your photos here.</h1>
                        </label>
                    </>)}
            {img && <button disabled={loading.state} className='w-full p-3 border-t text-blue font-semibold hover:text-lightBlue'>{loading.message}</button>}
        </form>
    )
}
