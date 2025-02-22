import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

export const Product = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className='w-80'>
                <h1>iPhone 16</h1>
                <p>price = 100</p>
                <button onClick={() => { dispatch(addToCart({ id: 101, name: 'iPhone 16', price: 200 })) }} className='bg-blue-400 rounded p-2'>ADD TO CART</button>
            </div>
            <div className="w-80">
                <h1>iphone 15</h1>
                <p>price = 200</p>
                <button onClick={() => { }} className="bg-blue-400 rounded p-2">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
