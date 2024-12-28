import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  const movies = [
    {
      id:103,
      name:"Super Men"
    },
    {
      id:104,
      name:"Joker"
    }
  ]
  return (
    <div>
        <h1>Netflix Movies....</h1>
        <ul>
          <li>
            <Link to='play/101'>Pushpa</Link>
          </li>
          <li>
            <Link to='/netflixmovies/play/102'>RRR</Link>
          </li>
        </ul>
        <ul>
          {
            movies.map((movie)=>{
              return <li>
                <Link to={`play/${movie.id}`}>{movie.name}</Link>
              </li>
            })
          }
        </ul>
    </div>
  )
}
