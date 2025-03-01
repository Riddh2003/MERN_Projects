import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const themestate = useSelector((state) => state.theme.theme);
    return (
        <div
            className={`${themestate === 'white' ? 'text-[#6b21a8]' : 'text-white'} flex justify-center items-center w-full h-full`}
            style={{
                fontFamily: "Mystery Quest, serif",
            }}
        >
            <h1 className='text-7xl'>
                🤗Welcome, to the world of Harry Potter!
            </h1>
        </div>
    );
};
