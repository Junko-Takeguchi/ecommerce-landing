import {atom} from "recoil";

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

const initialProductsAtom = atom<product[]>({
    key: "initialProducts",
    default: []
});

export default initialProductsAtom;