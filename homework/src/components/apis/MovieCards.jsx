import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

export const MovieCards = () => {
    const { register, handleSubmit } = useForm();
    const [movieData, setMovieData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const getMoviesData = async (data) => {
        setLoading(true);
        try {
            const res = await axios.get('https://www.omdbapi.com/', {
                params: {
                    s: data.movie,
                    apikey: "30b068fb"
                }
            });
            console.log(res.data.Search[0]);
            setMovieData(res.data.Search);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error : ', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <form onSubmit={handleSubmit(getMoviesData)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Search Movies</h1>
                <input
                    placeholder='Enter movie name'
                    {...register('movie')}
                    className="border-2 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-300">
                    Search
                </button>
            </form>

            {isSubmitted && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movieData.map((movie, index) => (
                        <div key={index} className="bg-gray-400 p-4 rounded-lg overflow-hidden">
                            <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover rounded-md mb-4" />
                            <h2 className="text-lg text-white font-bold truncate">{movie.Title}</h2>
                            <p className="text-white text-sm">Released year: {movie.Year}</p>
                            <Link to={`moivedetails/${movie.imdbID}`}>
                                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                    More Details...
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
