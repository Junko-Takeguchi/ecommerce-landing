// import React from 'react';

import { AiOutlineDown} from "react-icons/ai";
// import Card from "../Components/Card.tsx";
import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import Card from "../Components/Card.tsx";

interface product {
    id: number,
    title: string,
    description: string,
    price: number
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const Home = () => {
    const [products, setProducts] = useState<product[]>([]);
    const [page, setPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(products.length/10);
    }, [products]);
    
    const pageButtons = useMemo(() => {
        const buttonArray: React.ReactElement[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === page) {
                buttonArray.push(
                    <button
                        className={`rounded-full py-2 px-4 bg-primary text-white`}
                        onClick={() => setPage(i)}
                    >{i}</button>
                )
            } else {
                buttonArray.push(
                    <button
                        className={`rounded-full py-2 px-4 border border-primary text-primary`}
                        onClick={() => setPage(i)}
                    >{i}</button>
                )
            }
        }
        return buttonArray;
    }, [page, totalPages])
    
    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100")
            .then(res => setProducts(res.data.products))
            .catch(e => console.log(e));
    }, []);
    
    return (
        <div className="px-4 mb-8">
            <div className="flex w-screen justify-between py-4 px-6">
                <span className="text-2xl font-bold text-primary">Ecommerce</span>
                <div className="flex gap-3">
                    <span className="font-semibold text-neutral-800 hover:cursor-pointer hover:underline hover:text-primary">Cart</span>
                    <span className="font-semibold text-neutral-800 hover:cursor-pointer hover:underline hover:text-primary">Account</span>
                    <span className="font-semibold text-neutral-800 hover:cursor-pointer hover:underline hover:text-primary">My Orders</span>
                </div>
            </div>
            <div className="mx-6 rounded-xl flex justify-evenly gap-3 bg-peach px-6">
                <div className="flex gap-4 flex-col justify-evenly">
                    <h1 className="text-primary font-semibold text-4xl">Grab upto 50% off on selected Headphones</h1>
                    <button className="rounded-2xl py-3 px-6 bg-green-800 text-white align-middle whitespace-nowrap w-fit hover:bg-transparent hover:text-primary hover:cursor-pointer hover:border hover:border-primary transition">Buy Now</button>
                </div>
                <img className="h-72 w-80" src="../../public/images/products/lady.png" alt="Girl with Headphones"/>
            </div>
            <div className="flex mx-6 my-14 gap-3">
                <div className="rounded-2xl flex items-center gap-1 px-4 py-2 font-semibold bg-neutral-200 text-neutral-900 cursor-pointer">
                    <span>Category</span>
                    <AiOutlineDown/>
                </div>
                <div className="rounded-2xl flex items-center gap-1 px-4 py-2 font-semibold bg-neutral-200 text-neutral-900 cursor-pointer">
                    <span>Price</span>
                    <AiOutlineDown/>
                </div>
                <div className="rounded-2xl flex items-center gap-1 px-4 py-2 font-semibold bg-neutral-200 text-neutral-900 cursor-pointer">
                    <span>Review</span>
                    <AiOutlineDown/>
                </div>
            </div>
            <h1 className="text-3xl text-neutral-800 font-bold p-6 mb-4"> Shop Now!</h1>
            <div className="flex flex-wrap gap-3 mx-6">
                {products.length> 0 && products.slice((page*10)-10, page*10).map((product: product) => (
                    <Card key={product.id} title={product.title} rating={product.rating} price={product.price} thumbnail={product.thumbnail} />
                ))}
            </div>
            <div className="mt-7 flex gap-4 justify-center">
                {pageButtons}
            </div>
        </div>
    );
};

export default Home;