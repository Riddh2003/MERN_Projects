import React from 'react'

export const SubContent = (props) => {
    console.log("SubContent props", props);
    return (
        <div>
            <h1>SUB CONTENT</h1>
            <h2>{props.title}</h2>
        </div>
    )
}
