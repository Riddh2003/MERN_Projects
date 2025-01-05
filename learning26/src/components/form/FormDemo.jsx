import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export const FormDemo = () => {
    const { register, handleSubmit } = useForm();
    const [userData,setUserData] = useState({});
    const [isFormSubmitted,setIsFormSubmitted] = useState(false); 

    const submitHandler = (data) => {
        console.log(data);
        setUserData(data);
        setIsFormSubmitted(true);

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
                <div>
                    <label>GENDER : </label><br ></br>
                    Male : <input type='radio' name='male' value='male' {...register("gender")}></input>
                    Female : <input type='radio' name='female' value='female' {...register("gender")}></input>
                </div>
                <div>
                    <select {...register("country")}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="England">England</option>
                    </select>
                </div>
                <div>
                    <label>Color : </label>
                    <input type='color' {...register("color")}></input>
                </div>
                <input type='submit' placeholder='submit'></input>
            </form>
            {
                isFormSubmitted &&
                <div style={{color:userData.color}}>
                    <h1>Result</h1>
                    <h2>Name: {userData.name}</h2>
                    <h2>Age: {userData.age}</h2>
                    <h2>Gender: {userData.gender}</h2>
                    <h2>Country: {userData.country}</h2>
                </div>
            }
        </div>
    )
}
