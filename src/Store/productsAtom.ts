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

const productsAtom = atom<product[]>({
    key: "products",
    default: []
});

export default productsAtom;