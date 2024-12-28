import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixSeries = () => {
    const serieses = [
        {
            id:101,
            name:"Money Heist"
        },
        {
            id:102,
            name:"Mirzapur 3"
        }
    ]
  return (
    <div>
        <h1>Netflix Series...</h1>
        <ul>
            {
                serieses.map((series)=>{
                    return <li>
                        <Link to={`play/${series.id}/${series.name}`}>{series.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
