import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { successToast } from '../../../Components/toast';
import { Card } from '@mui/material';

function MUproduct() {
    const [medicalProducts, setMedicalProducts] = useState([]);
    const [upcomingProducts, setUpcomingProducts] = useState([]);
    const [productLimit, setProductLimit] = useState(4)



    useEffect(() => {
        fetchdata()
        fetchApi()
    }, [])

    const handleAddToCart = async (e) => {
        try {
            console.log('api');
            const response = await axios.post('http://localhost:3002/api/cart/addToCart', { productId: e, userId: JSON.parse(localStorage.getItem("userData"))?._id });
            console.log(response);

            successToast("Succesfully Added into Cart")

        } catch (error) {
            console.log(error);
        }
    };

    const handleAddToWishlist = async (e) => {
        try {
            console.log('api');
            const response = await axios.post('http://localhost:3002/api/wishlist/addToWishlist', { productId: e, userId: JSON.parse(localStorage.getItem("userData"))?._id });
            console.log(response);


            successToast("Succesfully Added into Wishlist")

        } catch (error) {
            console.log(error);
        }
    };


    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/products")
            setMedicalProducts(response.data.products);
        } catch (error) {
            console.log(error, 'error');
        }
    }

    const fetchApi = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/products")
            setUpcomingProducts(response.data.products);
        } catch (error) {
            console.log(error, 'error');
        }
    }



    return (
        <>
            <div className=''>
                <h1 className='text-center text-xl fw-bolder '>Medical Products</h1>
                <div className="  ">
                    <div className="text-right pe-4">
                    <Link to={'view-all'}>
                        <button className='text-teal-900 sm:text-lg hover:text-lime-500 '>View All <i class="fa-solid  fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></button>

                    </Link>
                    </div>
                    <div className="flex flex-wrap justify-center m-4 ">
                        {
                            medicalProducts.map((item, index) => {
                                return (
                                    <>
                                        {index < productLimit &&

                                            <Card className=' border lg:w-[200px] sm:w-[150px] sm:h-[250px] m-2 flex flex-col shadow justify-between  hover:translate-x-1  '>
                                                <button type='button' onClick={() => {
                                                    handleAddToWishlist(item._id)
                                                    setColor("danger")
                                                }} className='bg-teal-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute text-white text-xs sm:text-base'><i class="fa-regular  fa-heart" onClick={() => setColor("bg-warning")} ></i> </button>

                                                <Link to={`/products/${item._id}`} state={item} >

                                                    <div key={index} className="h-[100px] sm:h-[140px]">
                                                        <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                                    </div>
                                                    <div className="border-t-2 p-2">
                                                        <p className='text-xl sm:text-base font-bold'>{item.name}</p>
                                                        <p className='text-xl sm:text-base'>${item.price}</p>
                                                    </div>
                                                </Link>
                                                <Link >
                                                    <div className="bg-teal-600 text-slate-300 p-2 flex items-center justify-between " onClick={() => {
                                                        handleAddToCart(item._id)
                                                    }}>
                                                        <p>Add to Cart </p>
                                                        <i class="fa-solid fa-basket-shopping"></i>
                                                    </div>

                                                </Link>
                                            </Card>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>

                    <h1 className='text-center text-xl fw-bolder  m-2'>Upcoming Products</h1>
                    <div className="text-right ">
                    <Link to={'view-all'}>
                        <button className='text-teal-900 sm:text-lg hover:text-lime-500 '>View All <i class="fa-solid  fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i></button>

                    </Link>
                    </div>
                    <div className="flex flex-wrap justify-center m-2 overflow-x-scroll ">
                        {
                            upcomingProducts.map((item, index) => {
                                return (
                                    <>
                                        {index < productLimit &&

                                            <Card className=' border lg:w-[200px] sm:w-[150px] sm:h-[250px] m-2 flex flex-col shadow justify-between  hover:translate-x-1  '>
                                                <button type='button' onClick={() => {
                                                    handleAddToWishlist(item._id)
                                                    setColor("danger")
                                                }} className='bg-teal-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute text-white text-xs sm:text-base'><i class="fa-regular  fa-heart" onClick={() => setColor("bg-warning")} ></i> </button>

                                                <Link to={`/products/${item._id}`} state={item} >

                                                    <div key={index} className="h-[100px] sm:h-[140px]">
                                                        <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                                    </div>
                                                    <div className="border-t-2 p-2">
                                                        <p className='text-xl sm:text-base font-bold'>{item.name}</p>
                                                        <p className='text-xl sm:text-base'>${item.price}</p>
                                                    </div>
                                                </Link>
                                                <Link >
                                                    <div className="bg-teal-600 text-slate-300 p-2 flex items-center justify-between " onClick={() => {
                                                        handleAddToCart(item._id)
                                                    }}>
                                                        <p>Add to Cart </p>
                                                        <i class="fa-solid fa-basket-shopping"></i>
                                                    </div>

                                                </Link>
                                            </Card>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>

                </div>

                
            </div>
        </>
    )
}

export default MUproduct
