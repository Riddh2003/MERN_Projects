import React from 'react'
import { SubContent } from './SubContent'

export const Content = (props) => {
  return (
    <div>
        <h1>CONTENT COMPONENT</h1>
        <h2>{props.title}</h2>
        <h2>{props.city}</h2>
        <SubContent title={props.title}></SubContent>
    </div>
  )
}
