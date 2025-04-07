import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

export const MUI = () => {
    const [rate, setRate] = useState('fill the rating.');

    const rateHandler = (event, value) => {
        if (value === 1) {
            setRate('Poor');
        } else if (value === 2) {
            setRate('Below Average');
        } else if (value === 3) {
            setRate('Average');
        } else if (value === 4) {
            setRate('Good');
        } else if (value === 5) {
            setRate('Excellent');
        }
    };

    return (
        <div>
            <h1>MUI</h1>
            <StyledRating
                name="customized-color"
                defaultValue={0}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                onChange={rateHandler}
            />
            <p>{rate}</p>
        </div>
    );
};