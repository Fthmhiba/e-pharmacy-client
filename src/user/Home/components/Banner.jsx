import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { errorToast } from '../../../Components/toast';

function Banner() {
    const [Banner, setBanner] = useState([]);
    const [Banner2, setBanner2] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetchData();
        fetchApi()
    }, [refresh]);

    const fetchData = async (e) => {
        try {
            const response = await axios.get("http://localhost:3002/api/banner", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
                },
            });
            console.log(response, "res");

            setBanner(response.data.Banner);
        } catch (error) {
            errorToast(error.message);
        }
    };

    const fetchApi = async (e) => {
        try {
            const response = await axios.get("http://localhost:3002/api/banner2", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
                },
            });
            console.log(response, "res");

            setBanner2(response.data.Banner);
        } catch (error) {
            errorToast(error.message);
        }
    };

    return (
        <div className='p-1 ' >
            <div className="p-1 flex gap-1 flex-wrap justify-center ">
                {
                    Banner.map((item, index) => {
                        return (


                            <div className="flex rounded bg-amber-200 p-3 flex-wrap md:justify-between  justify-around items-center" key={index} >
                                <div className="">
                                    <p className='bg-lime-700 w-20 text-white rounded p-2 '>{item.percentage}% Off</p>
                                    <h2 className='fw-bolder text-xl'>{item.title}</h2>
                                    <p className='fw-semibold pb-2 pt-2'>{item.description}</p>
                                    <p className='line-through '>{item.rate}</p>
                                    <h2 className='fw-bold fs-5 '>{item.offerRate} <span className='fw-normal fs-6'>Including Tax</span></h2>
                                </div>
                                <img className='rounded flex' src={item.image} width="250px" alt="" />
                            </div>
                        )
                    })
                }
                <div className="flex flex-col justify-center items-center gap-1">
                    {
                        Banner2.map((item, index) => {
                            return(
                                <>
                            <div key={index} className="flex rounded bg-lime-200 p-3 w-[300px] h-[200px] justify-center items-center ">
                                <div className="">
                                    <p className='bg-lime-700 w-16 text-white rounded p-1 text-xs '>{item.percentage}% Off</p>
                                    <h3 className='fw-bolder fs-6  '>{item.title}</h3>
                                    <p className='fw-semibold text-xs pb-2 pt-2'>{item.description} </p>
                                    <p className='line-through text-xs '>{item.rate}</p>
                                    <h2 className='fw-bold fs-6 '>{item.offerRate} <span className='fw-normal text-xs'>Including Tax</span></h2>
                                </div>
                                <img src={item.image} width="130" alt="" />
                            </div>
                                
                                </>
                            )

                        })
                    }
                </div>


            </div>
            {/* <section>
                <h1 className='text-center text-xl fw-bolder '>Popular Products</h1>
                <div className="flex justify-around items-center gap-3 p-4">
                    {
                        topProducts.map((item) => {
                            return (
                                <>
                                    <div className="border-2 border-teal-700 w-40   rounded ">
                                        <img src={item.img1} className='p-2' alt="" />
                                        <div className="border-t-2 p-1">
                                            <p className='' > {item.title} </p>
                                            <p> {item.price} </p>
                                        </div>
                                        <div className="bg-teal-600 text-slate-300 p-1 flex items-center justify-between ">
                                            <p>Add to Cart </p>
                                            <i class="fa-solid fa-basket-shopping"></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section> */}

            <section className='grid sm:flex flex-wrap justify-evenly my-5 p-2 '>
                <Link to={`/cards/${'orders'}`}>

                    <div className="bg-rose-200 rounded p-3 w-36">
                        <h2><i class="fa-solid fa-users fs-4 p-1"></i> 14K+</h2>
                        <p>Orders</p>
                        <p>Completed</p>
                    </div>
                </Link>
                <Link to={`/cards/${'awards'}`}>

                    <div className="bg-lime-200 rounded p-3  w-36">
                        <h2><i class="fa-solid fa-medal fs-4 p-1"></i>25+</h2>
                        <p>Won</p>
                        <p>Awards</p>
                    </div>
                </Link>
                <Link to={`/cards/${'customers'}`}>

                    <div className="bg-orange-200  w-36 rounded p-3">
                        <h2><i class="fa-solid fa-people-line fs-4 p-1"></i>8K+</h2>
                        <p>Happy</p>
                        <p>Customers</p>
                    </div>
                </Link>
                <Link to={`/cards/${'reviews'}`}>

                    <div className="bg-amber-200  w-36 rounded p-3">
                        <h2><i class="fa-solid fa-face-smile-beam fs-4 p-1"></i>12K+</h2>
                        <p>Positive</p>
                        <p>Reviews</p>
                    </div>
                </Link>
            </section>

        </div >
    )
}

export default Banner