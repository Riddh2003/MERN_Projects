import React from 'react'
import "../assets/css/Header.css"

function Header(props) {
    console.log("Header props",props);
    return (
        <div className='header'>
            <h1>HEADER COMPONENT</h1>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Header