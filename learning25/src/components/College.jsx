import React from 'react'

export const College = (props) => {
  return (
    <div>
        <button onClick={()=>{props.check()}}>Click Me</button>
    </div>
  )
}
