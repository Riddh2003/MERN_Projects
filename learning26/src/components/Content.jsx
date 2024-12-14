import React from 'react'
import { SubContent } from './SubContent'

export const Content = (props) => {
    var x = 100;
    return (
        <div>
            <h1></h1>
            <SubContent val = {x} str={props.string}></SubContent>
        </div>
    )
}
