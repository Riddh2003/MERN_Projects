import React, { useState } from 'react'

export const UseStateCom2 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const stopLoading = () => {
        setIsLoading(false);
    }
    return (
        <div>
            {
                isLoading && <h1>Loading....</h1>
            }
            {/* <button onClick={() => {stopLoading()}}>Stop Loading</button> */}
            <button onClick={()=>setIsLoading(false)}>Stop Loading</button>
        </div>
    )
}
