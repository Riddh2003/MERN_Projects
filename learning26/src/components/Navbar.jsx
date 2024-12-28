import React from 'react';
import { Link } from 'react-router-dom';
import { NetflixDashboard } from './netflix/NetflixDashboard';

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg text-light bg-dark">
                {/* <a class="navbar-brand" to >Navbar</a> */}
                <Link className='navbar-brand' to="/netflixdashboard">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            <Link className='nav-link' to="/netflixhome">Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <Link className='nav-link' to="/netflixmovies">Movies</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            <Link className='nav-link' to="/netflixseries">Series</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
