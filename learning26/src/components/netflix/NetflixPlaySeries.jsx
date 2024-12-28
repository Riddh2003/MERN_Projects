import React from 'react'
import { useParams } from 'react-router-dom'

export const NetflixPlaySeries = () => {
    var id = useParams().id
    return (
        <div>
            <h1>
                Netflix Series...{id}
            </h1>
        </div>
    )
}
