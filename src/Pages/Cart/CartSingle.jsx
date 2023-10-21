import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const CartSingle = ({product,deleteHandle}) => {
    const { name, imageUrl, brandName, productType, price, rating, description, _id } = product;

    const sadow = {
        boxShadow: '0 0 22px #77777752',
    }
    return (

        <div style={sadow} className="grid grid-cols-1 lg:grid-cols-5 bg-white dark:bg-gray-300  gap-3 rounded-lg py-6 px-4 mb-5">
            <div className="lg:col-span-2">
                <img className="h-[250px] w-full" src={imageUrl} alt="Movie" />
            </div>

            <div className="lg:col-span-3">
                <h2 className="text-2xl mb-3 font-medium text-purple-700">{name}</h2>
                <div className="flex justify-between mb-3 text-base font-bold text-gray-500">
                    <p>Brand Name: <span className="text-purple-700">{brandName}</span></p>
                    <p className="mr-3">Type: <span className="text-purple-700"><span className="text-purple-700">{productType}</span></span></p>
                </div>
                <div className="flex justify-between mb-3 text-base font-bold text-gray-500">
                    <p>Price: <span className="text-purple-700">{price}</span>$</p>
                    <p className="mr-3 flex align-middle gap-2 ">Rating: <Rating name="read-only" value={rating} readOnly /> </p>
                </div>
                <p className="text-sm mb-3 font-medium text-gray-400  dark:text-gray-500">{description.slice(0, 150)}...</p>
                <div className="flex gap-9 mt-6">
                    <Link onClick={()=>deleteHandle(name)} className="text-white font-medium py-2 px-4 rounded-full bg-purple-700">Delete Form Cart</Link>
                    
                </div>
            </div>
        </div>


    );
};

export default CartSingle;