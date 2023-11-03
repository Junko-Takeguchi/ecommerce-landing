import {AiOutlineDown} from "react-icons/ai";
import {useCallback, useMemo, useState} from "react";
import {useRecoilState} from "recoil";
import productsAtom from "../Store/productsAtom.ts";
import {MdFilterListOff} from "react-icons/md";

const Filters = () => {
    const [products, setProducts] = useRecoilState(productsAtom);
    const [isCategoryHidden, setIsCategoryHidden] = useState(false);
    const [isPriceHidden, setIsPriceHidden] = useState(false);
    const [isRatingHidden, setIsRatingHidden] = useState(false);

    const initialProducts = useMemo(() => {
        return [...products];
    }, []);

    const categories = useMemo(() => {
        const categorySet = new Set<string>();

        initialProducts.forEach((product) => {
            categorySet.add(product.category);
        });

        return Array.from(categorySet);
    }, [initialProducts]);

    const sortByCategory = useCallback((category: string) => {
        const filteredProducts = [...initialProducts].filter((product) => product.category === category);
        setProducts(filteredProducts);
    }, [initialProducts]);

    const sortByRating = useCallback((type: string) => {
        const sortedProducts = [...products];

        if (type === "High to Low") {
            sortedProducts.sort((a, b) => b.rating - a.rating);
        } else if (type === "Low to High") {
            sortedProducts.sort((a, b) => a.rating - b.rating);
        }

        setProducts(sortedProducts);
    }, [products]);

    const sortByPrice = useCallback((type: string) => {
        const sortedProducts = [...products];

        if (type === "High to Low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (type === "Low to High") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }

        setProducts(sortedProducts);
    }, [products]);

    return (
        <div className="flex justify-between mx-6 my-14 gap-3">
            <div className="flex gap-3">
                <div className="relative inline-block">
                    <div
                        className="
                    rounded-2xl
                    px-4
                    py-2
                    font-semibold
                    bg-neutral-200
                    text-neutral-900
                    cursor-pointer
                    relative
                    inline-block
                "
                        onClick={() => {
                            setIsCategoryHidden(!isCategoryHidden);
                            setIsRatingHidden(false);
                            setIsPriceHidden(false);
                        }}
                    >
                        <span className="flex items-center gap-1">Category <AiOutlineDown/></span>
                    </div>
                    <div className={`absolute ${!isCategoryHidden ? "hidden" : "block"} mt-2 bg-neutral-200 border border-gray-300 rounded-lg shadow-lg`}>
                        <div className="flex flex-col">
                            {categories && categories.map((category) => (
                                <span
                                    className="p-2 w-full px-4 py-2 hover:cursor-pointer hover:bg-white transition rounded-lg"
                                    onClick={() => sortByCategory(category)}
                                >
                                {category}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative inline-block">
                    <div
                        className="
                    rounded-2xl
                    px-4
                    py-2
                    font-semibold
                    bg-neutral-200
                    text-neutral-900
                    cursor-pointer
                    relative
                    inline-block
                "
                        onClick={() => {
                            setIsPriceHidden(!isPriceHidden);
                            setIsRatingHidden(false);
                            setIsCategoryHidden(false)
                        }}
                    >
                        <span className="flex items-center gap-1">Price <AiOutlineDown/></span>
                    </div>
                    <div className={`absolute ${!isPriceHidden ? "hidden" : "block"} mt-2 bg-neutral-200 border border-gray-300 rounded-lg shadow-lg`}>
                        <div className="flex flex-col">
                        <span
                            className="p-2 px-4 py-2 w-full hover:cursor-pointer hover:bg-white transition rounded-lg whitespace-nowrap"
                            onClick={() => sortByPrice("High to Low")}
                        >
                            High to Low
                        </span>
                            <span
                                className="p-2 px-4 py-2 w-full hover:cursor-pointer hover:bg-white transition rounded-lg whitespace-nowrap"
                                onClick={() => sortByPrice("Low to High")}
                            >
                                Low to High
                        </span>
                        </div>
                    </div>
                </div>
                <div className="relative inline-block">
                    <div
                        className="
                    rounded-2xl
                    px-4
                    py-2
                    font-semibold
                    bg-neutral-200
                    text-neutral-900
                    cursor-pointer
                    relative
                    inline-block
                "
                        onClick={() => {
                            setIsRatingHidden(!isRatingHidden);
                            setIsCategoryHidden(false);
                            setIsPriceHidden(false)
                        }}
                    >
                        <span className="flex items-center gap-1">Ratings <AiOutlineDown/></span>
                    </div>
                    <div className={`absolute ${!isRatingHidden ? "hidden" : "block"} mt-2 bg-neutral-200 border border-gray-300 rounded-lg shadow-lg`}>
                        <div className="flex flex-col">
                        <span
                            className="p-2 px-4 py-2 w-full hover:cursor-pointer hover:bg-white transition rounded-lg whitespace-nowrap"
                            onClick={() => sortByRating("High to Low")}
                        >
                          High to Low
                        </span>
                            <span
                                className="p-2 px-4 py-2 w-full hover:cursor-pointer hover:bg-white transition rounded-lg whitespace-nowrap"
                                onClick={() => sortByRating("Low to High")}
                            >
                                Low to High
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    rounded-2xl
                    px-4
                    py-2
                    font-semibold
                    bg-neutral-200
                    text-neutral-900
                    cursor-pointer
                    relative
                    flex
                    items-center
                "
                onClick={() => {
                    setProducts(initialProducts);
                }}
            >
                Remove Filters <MdFilterListOff/>
            </div>
        </div>
    );
};

export default Filters;