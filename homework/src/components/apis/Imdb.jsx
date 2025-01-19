import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Imdb = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const res = await axios.get('https://www.omdbapi.com/', {
                    params: {
                        i: id,
                        apikey: "30b068fb"
                    }
                });
                console.log(res.data);
                setMovieDetails(res.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieData();
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-100 max-h-full">
                <h1 className="text-3xl font-bold mb-4 h-full">{movieDetails.Title}</h1>
                <div className="flex flex-col md:flex-row">
                    <img src={movieDetails.Poster} alt={movieDetails.Title} className=" h-100 w-100 md:w-1/3 object-cover rounded-md mb-4 md:mb-0 md:mr-4" />
                    <div className="flex flex-col">
                        <p><strong>Year:</strong> {movieDetails.Year}</p>
                        <p><strong>Genre:</strong> {movieDetails.Genre}</p>
                        <p><strong>Director:</strong> {movieDetails.Director}</p>
                        <p><strong>Actors:</strong> {movieDetails.Actors}</p>
                        <p><strong>Plot:</strong> {movieDetails.Plot}</p>
                        <p><strong>Awards:</strong> {movieDetails.Awards}</p>
                        <p><strong>BoxOffice:</strong> {movieDetails.BoxOffice}</p>
                        <p><strong>Country:</strong> {movieDetails.Country}</p>
                        <p><strong>Language:</strong> {movieDetails.Language}</p>
                        <p><strong>Metascore:</strong> {movieDetails.Metascore}</p>
                        <p><strong>Rated:</strong> {movieDetails.Rated}</p>
                        <p><strong>Released:</strong> {movieDetails.Released}</p>
                        <p><strong>Runtime:</strong> {movieDetails.Runtime}</p>
                        <p><strong>Writer:</strong> {movieDetails.Writer}</p>
                        <p><strong>imdbRating:</strong> {movieDetails.imdbRating}</p>
                        <p><strong>imdbVotes:</strong> {movieDetails.imdbVotes}</p>
                        <Link to='/navbar/movies'>
                            <button className='w-36 bg-blue-500 p-2 text-lg rounded hover:bg-blue-500 font-semibold text-white' >Back...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
