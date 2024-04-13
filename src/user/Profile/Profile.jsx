import { Avatar, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()


    return (
        <>
        <p className=" text-center p-2" >
                <Link to={"/"} > <span className='hover:text-lime-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>

            </p>
            <h1 className="fs-4 text-center m-3 fw-bold  text-teal-800 hover:text-gray-300" >Profile</h1>
            <div className="text-center bg-teal-700 w-96 text-gray-300 p-3 m-auto rounded">
            <div className="text-center">
                <div className="flex gap-3 m-2">
                    <Avatar></Avatar>
                    <span className="text-lg text-white hover:text-yellow-300"> {JSON.parse(localStorage.getItem("userData")).fname}</span>
                </div>
                <div className="">
                    <p>Email: <span className="text-lg text-white hover:text-yellow-300"> {JSON.parse(localStorage.getItem("userData")).email}</span></p>
                    <p  className=" text-teal-700 bg-lime-100 hover:text-stone-800 p-1 rounded">Edit profile</p>
                </div>
            </div>

            <div>
                <div className="flex justify-center align-items-center gap-2  m-1">
                    <button onClick={() => {
                        navigate('/cart')
                    }} className=" text-teal-700 bg-lime-100 hover:text-stone-800 p-1 rounded">My cart <i class="fa-brands fa-shopify"></i> </button>
                    <button onClick={() => {
                        navigate('/Wishlist')
                    }} className=" text-teal-700 bg-lime-100 hover:text-stone-800 p-1 rounded">Wishlist <i class="fa-regular fa-heart"></i> </button>
                </div>
            </div>
            <div className="p-2">
            <p className='text-base sm:text-lg  shadow-md'>Feedback & Information</p>
            <Link to={''}><p className='text-slate-100  hover:text-stone-800 p-1 rounded'>Terms, Policies and Licenses</p></Link>
            <Link to={''}><p className='text-slate-100  hover:text-stone-800 p-1 rounded'>Browse FAQs</p></Link>
        </div>
            <p onClick={() => {
                localStorage.removeItem("userData")
                localStorage.removeItem("usertoken")
                navigate('/user-login')
            }} className="text-lg text-white hover:text-fuchsia-300 " >Logout</p>
            </div>
        </>
    )
}

export default Profile