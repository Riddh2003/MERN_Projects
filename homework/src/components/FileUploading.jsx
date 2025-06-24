import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export const FileUploading = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState();


    const submitHandler = async (data) => {
        const formData = new FormData();
        for (let i = 0; i < data.files.length; i++) {
            formData.append('photos', data.files[i]);
        }
        try {
            const respoonse = await axios.post('http://localhost:3000/upload/files?id=6831bafb012f2de0200576ea', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            console.log(data);
            console.log(respoonse.data.cloudinaryResponse.secure_url);
            setImage(respoonse.data.cloudinaryResponse.secure_url);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>FileUpload</label>
                    <input multiple type='file' {...register('files')}></input>
                </div>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' {...register('name')}></input>
                </div>
                <button type='submit' className='p-2 bg-blue-300 rounded-lg'>Upload</button>
            </form>
            <img src={image} alt='upload'></img>
        </div >
    )
}
