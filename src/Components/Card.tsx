import React from 'react';
import {AiFillStar} from "react-icons/ai";

interface cardProps {
    id?: number,
    title: string,
    description?: string,
    price: number
    discountPercentage?: number,
    rating: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail: string,
    images?: string[]
}
const Card: React.FC<cardProps> = ({thumbnail, price, rating, title}) => {
    const arr: number[] = [];
    for (let i=0; i<Math.floor(rating); i++) {
        arr.push(i)
    }
    return (
        <div className="flex gap-2 py-3 px-6 max-w-xs h-sm bg-white border border-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform">
            <div className="flex flex-col gap-2 justify-between">
                <img className="rounded-t-lg max-h-60" src={thumbnail} alt={title}/>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between gap-4">
                        <span className="font-semibold">{title}</span>
                        <span className="font-semibold text-xl">${price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-yellow-400">
                            {arr.map(() => (
                                <AiFillStar/>
                            ))}
                        </div>
                        <span className="text-black">{rating}</span>
                    </div>
                    <button className="rounded-2xl py-2 px-4 bg-transparent border border-primary text-primary align-middle whitespace-nowrap w-fit hover:bg-primary hover:text-white hover:cursor-pointer hover:border hover:border-primary transition">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;