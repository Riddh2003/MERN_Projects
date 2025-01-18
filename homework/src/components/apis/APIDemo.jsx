import React from 'react'
import { Await } from 'react-router-dom'
import axios from 'axios'

export const APIDemo = () => {
    const apicall = async () => {
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res)
    }
    return (
        <div>
            <h1>API DEMO</h1>
            <button onClick={() => { apicall() }}></button>
        </div>
    )
}
