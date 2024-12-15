import React from 'react'
// import { SubContent } from './SubContent'

export const Content = () => {
    // var x = 100;

    const products = [
        {
            id: 1,
            name: "Samsung S24",
            price: 110000,
            categroy: "Phone",
            availableColor: "Red"
        },
        {
            id: 2,
            name: "iPhone 16 Pro max",
            price: 120000,
            categroy: "Phone",
            availableColor: "Blue"
        },
        {
            id: 3,
            name: "Samsung S24 Ultra",
            price: 150000,
            categroy: "Phone",
            availableColor: "lightgreen"
        }
    ];

    const filterPro = products.filter(product => product.price > 115000);

    return (
        <div>
            {/* <h1></h1> */}
            {/* <SubContent val={x} str={props.string}></SubContent> */}
            {
                products.map((product) => {
                    return (
                        <h2>
                            <span style={{ color: product.availableColor }}>{product.name}</span>
                        </h2>
                    )
                })
            }
            <div>
                <h1>Filter Products (Price 115000):</h1>
                {

                    filterPro.map((product) => {
                        return (
                            <h2>
                                <span style={{ color: product.availableColor }}>
                                    {product.name} - Rs.{product.price}
                                </span>
                            </h2>
                        )
                    })
                }
            </div>
        </div>
    );
};

// task: json array products: id name price, category,availableColor,

// 1)display product name in available color .. map
// 2)display product with price criteria.. filter...