import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export const FileUploading = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState();
    const submitHandler = async (data) => {
        const respoonse = await axios.post('http://localhost:3000/upload/files?id=6831bafb012f2de0200576ea', {
            photos: data.files
        })
        setImage(respoonse);
        console.log(respoonse);
    }
    return (
        <div>
            <form onClick={handleSubmit(submitHandler)}>
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
            {/* <img src={ }></img> */}
        </div >
    )
}
