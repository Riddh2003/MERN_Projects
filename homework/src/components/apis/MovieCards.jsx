import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

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
                    apikey: "30b068fb",
                },
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
            <form onSubmit={handleSubmit(getMoviesData)} className="bg-black p-6 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center text-white mb-4">Search Movies</h1>
                <input
                    placeholder="Enter movie name"
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
                        <Card key={index} sx={{ maxWidth: 345 }} className="shadow-lg h-96 bg-black text-white rounded-md overflow-hidden">
                            <CardMedia
                                component="img"
                                className='h-60'
                                image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x140"}
                                alt={movie.Title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className="truncate">
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2">
                                    Released Year: {movie.Year}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`moivedetails/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
                                    <Button size="small" variant="contained" color="primary">
                                        More Details
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};
