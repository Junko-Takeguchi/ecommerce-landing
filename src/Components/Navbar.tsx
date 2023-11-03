import {BsCart, BsPerson} from "react-icons/bs";


const Navbar = () => {
    return (
        <div className="flex w-screen justify-between py-4 px-8">
            <span className="text-2xl font-bold text-primary">Ecommerce</span>
            <div className="flex gap-3 mr-8">
                <span className="text-lg font-semibold flex items-center gap-2 text-neutral-800 hover:cursor-pointer hover:text-skin transition"><BsCart/> Cart</span>
                <span className="text-lg font-semibold flex items-center gap-2 text-neutral-800 hover:cursor-pointer hover:text-skin transition"><BsPerson/>Account</span>
                {/*<span className="text-md font-semibold text-neutral-800 hover:cursor-pointer hover:text-skin">My Orders</span>*/}
            </div>
        </div>
    );
};

export default Navbar;