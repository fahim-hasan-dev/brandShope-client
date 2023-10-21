import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@mui/material";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const LoadProduct = useLoaderData()
    const [product, setProduct]=useState({})
    useEffect(() => {
        setProduct(LoadProduct)
    }, [LoadProduct])
    const { name, imageUrl, brandName, productType, price, rating, description, }=product;
    const addCartHandle = ()=>{
        fetch('https://brand-shope.vercel.app/cart',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)

            if(data.acknowledged){
                toast.success('Successfully Add to Cart!')
            }
            
        })
    }
    return (
        <div>
             <div className="max-w-screen-sm mx-auto my-10 px-6">
                <img className="h-[350px] w-full mb-4 " src={imageUrl} alt="" />
                <h1 className="text-3xl font-bold text-purple-700 mb-6">{name}</h1>
                <div className="flex justify-between mb-6 text-lg font-bold text-gray-500">
                    <p>Brand Name: <span className="text-purple-700">{brandName}</span></p>
                    <p className="mr-3">Type: <span className="text-purple-700"><span className="text-purple-700">{productType}</span></span></p>
                </div>
                <div className="flex justify-between mb-7 text-lg font-bold text-gray-500">
                    <p>Price: <span className="text-purple-700">{price}</span>$</p>
                    <p className="mr-3 flex align-middle gap-2 ">Rating: <Rating name="read-only" value={rating} readOnly /> </p>
                </div>
                <p className="text-base mb-12 font-medium text-gray-400">{description}</p>
                <div>
                <Link onClick={addCartHandle}  className="py-3 px-12 rounded bg-purple-700 text-base font-bold text-white ">Add to Cart</Link>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;