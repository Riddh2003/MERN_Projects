import React from 'react'
import {useForm} from "react-hook-form"

export const FormDemo = () => {
    const {register,handleSubmit} = useForm();

    const submitHandler = (data) =>{
        console.log(data);
    }
    return (
        <div>
            <h1>FromDemo</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME : </label>
                    <input type='text' placeholder='Enter name' {...register("name")} ></input>
                </div>
                <div>
                    <label>AGE : </label>
                    <input type='Number' placeholder='Enter age' {...register("age")}></input>
                </div>
                <input type='submit' placeholder='submit'></input>
            </form>
        </div>
    )
}
