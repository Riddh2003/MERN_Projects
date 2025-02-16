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
        <div className="min-h-fit max-w-full flex flex-col items-center justify-center p-4">
            <form onSubmit={handleSubmit(getMoviesData)} className="bg-white text-[#6b21a8] p-6 rounded-lg shadow w-full max-w-lg"
                style={{
                    fontFamily: "Mystery Quest, serif",
                }}>
                <h1 className="text-2xl font-bold text-center mb-4">Search Movies</h1>
                <input
                    placeholder="Enter movie name"
                    required
                    {...register('movie')}
                    className="border-2 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
                <button type="submit" className="bg-purple-800 text-white px-4 py-2 rounded w-full hover:bg-purple-700 transition duration-300">
                    Search
                </button>
            </form>

            {isSubmitted && (
                <div className="min-w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movieData.map((movie, index) => (
                        <Card key={index} sx={{ maxWidth: 345 }} className="shadow-lg h-96 bg-white text-[#6b21a8] rounded-md overflow-hidden"
                            style={{ fontFamily: "Mystery Quest, serif", }}>
                            <CardMedia
                                component="img"
                                className='h-60'
                                image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x140"}
                                alt={movie.Title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className="truncate font-bold" style={{
                                    color: "#6b21a8", fontFamily: "Mystery Quest, serif",
                                }}>
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2"
                                    className='font-bold'
                                    style={{ color: "#6b21a8", fontFamily: "Mystery Quest, serif" }}>
                                    Released Year: {movie.Year}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`moivedetails/${movie.imdbID}`}>
                                    <Button size="medium" variant="contained" style={{
                                        color: "white", fontFamily: "Mystery Quest, serif",
                                        backgroundColor: '#6b21a8',
                                    }}>
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
