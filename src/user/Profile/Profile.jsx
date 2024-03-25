import { Avatar, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()


    return (
        <>
            <h1 className="fs-4 text-center m-3 text-fuchsia-100 hover:text-gray-300" >profile</h1>
            <div className="text-center bg-slate-700 w-96 text-gray-300 p-3 m-auto rounded">
            <div className="text-center">
                <div className="flex gap-3 m-2">
                    <Avatar></Avatar>
                    <h3>Hello, <span className="text-lg text-white hover:text-yellow-300"> {JSON.parse(localStorage.getItem("users")).lname}</span> </h3>
                </div>
                <div className="">
                    <p>Email: <span className="text-lg text-white hover:text-yellow-300"> {JSON.parse(localStorage.getItem("users")).email}</span></p>
                    <p  className=" text-white bg-gray-400 hover:text-yellow-300 p-1 rounded">Edit profile</p>
                </div>
            </div>

            <div>
                <div className="flex justify-center align-items-center gap-2  m-1">
                    <button onClick={() => {
                        navigate('/cart')
                    }} className=" text-white bg-gray-400 hover:text-yellow-300 p-1 rounded">My cart <i class="fa-brands fa-shopify"></i> </button>
                    <button onClick={() => {
                        navigate('/Wishlist')
                    }} className=" text-white bg-gray-400 hover:text-yellow-300 p-1 rounded">Wishlist <i class="fa-regular fa-heart"></i> </button>
                </div>
            </div>
            <p onClick={() => {
                localStorage.removeItem("users")
                localStorage.removeItem("token")
                navigate('/user-login')
            }} className="text-lg text-white hover:to-fuchsia-300" >Logout</p>
            </div>
        </>
    )
}

export default Profile