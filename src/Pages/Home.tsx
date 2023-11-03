import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import Card from "../Components/Card.tsx";
import Navbar from "../Components/Navbar.tsx";
import Banner from "../Components/Banner.tsx";
import Filters from "../Components/Filters.tsx";
import {useRecoilState, useSetRecoilState} from "recoil";
import productsAtom from "../Store/productsAtom.ts";
import initialProductsAtom from "../Store/initialProductsAtom.ts";

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
    const [products, setProducts] = useRecoilState(productsAtom);
    const [page, setPage] = useState(1);
    const setInitialProducts = useSetRecoilState(initialProductsAtom);

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
            .then((res) => {
                setProducts(res.data.products);
                setInitialProducts(res.data.products);
            })
            .catch(e => console.log(e));
    }, []);
    
    return (
        <div className="mx-8 mb-8">
            <Navbar/>
            <Banner/>
            <Filters/>
            <h1 className="text-3xl text-neutral-800 font-bold p-6 mb-4"> Shop Now!</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {products.length> 0 && products.slice((page*10)-10, page*10).map((product: product) => (
                    <Card key={product.id} title={product.title} rating={product.rating} price={product.price} thumbnail={product.thumbnail} />
                ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4 justify-center">
                {pageButtons}
            </div>
        </div>
    );
};

export default Home;