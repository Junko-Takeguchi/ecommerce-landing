
const Banner = () => {
    return (
        <div className="mx-6 rounded-xl flex justify-evenly gap-3 bg-peach">
            <div className="flex gap-4 flex-col justify-evenly">
                <h1 className="text-primary font-semibold text-4xl">Grab upto 50% off <br/> on selected Headphones</h1>
                <button className="rounded-2xl px-6 py-3 bg-green-800 text-white align-middle whitespace-nowrap w-fit hover:bg-transparent hover:text-primary hover:cursor-pointer hover:border hover:border-primary transition">Buy Now</button>
            </div>
            <img className="h-72 w-80" src="https://thumbs2.imgbox.com/eb/e2/NHtsHEXb_t.png" alt="Girl with Headphones"/>
        </div>
    );
};

export default Banner;