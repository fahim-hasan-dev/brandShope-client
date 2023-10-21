
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast'
import { AuthContext } from "../../Context/AuthProvider";
import Dark from "./Dark";


const Header = () => {

// user logout 

    const { user, signout } = useContext(AuthContext)
    const navigate = useNavigate()
    const logOutHandle = () => {
        signout()
            .then(() => {
                toast.success('Successfully Logout!')
                navigate('/')
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div data-aos="fade-down" className="bg-white dark:bg-inherit shadow-md ">
            <div className=" py-3 px-4 max-w-screen-xl mx-auto ">
                <div className=" flex justify-between items-center">
                    <div>
                        <img className="w-[80px] h-[60px]" src="https://i.ibb.co/PFb49Mp/Date-2-removebg-preview.png" alt="" />
                    </div>
                    <div className="hidden md:block">
                        <div className="text-base font-bold flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Cart
                            </NavLink>


                        </div>
                    </div>
                    <div>


                        {
                            user ? <div className="flex gap-4 items-center">
                                {
                                    user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /> : <BiSolidUserCircle className="w-[50px] h-[50px]"></BiSolidUserCircle>
                                }


                                <Link onClick={logOutHandle} className="md:px-4 px-2 h-7 md:h-9 py-1 text-sm md:text-base md:py-[6px] bg-purple-700 rounded-full font-medium text-white">Log Out</Link>
                                <Dark></Dark>
                            </div>
                                : <div className="flex items-center text-base font-medium text-white gap-2 md:gap-5">
                                    <Link to='/signup' className="md:px-4 px-2 h-7 md:h-9 py-1 text-sm md:text-base md:py-[6px] bg-purple-700 rounded-full">Register</Link>
                                    <Link to='/login' className="md:px-4 px-2 h-7 md:h-9 py-1 text-sm md:text-base md:py-[6px] bg-purple-700 rounded-full">Sign In</Link>
                                    <Dark></Dark>
                                </div>
                        }



                    </div>
                </div>
                <div>
                    <div className="visible md:hidden mt-4 flex  justify-center">
                        <div className="text-base font-bold flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Cart
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;