import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Coupon() {
    const [coupon, setCoupon] = useState([])
    const [refresh, setRefresh] = useState(true)

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3002/api/coupons', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
                }
            })
            console.log(response);
            setCoupon(response.data.Coupon)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [refresh])

    return (
        <>
            <p className=" text-center p-2" >
                <Link to={"/"} > <span className='hover:text-lime-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>

            </p>
            <div className="p-2 flex flex-wrap lg:flex-col p-sm-2     justify-center items-center ">

                <div className="flex flex-wrap justify-center">
                    <div className="bg-slate-100 m-4 border shadow p-5 rounded-lg lg:w-[1200px]  md:w-[550px]  ">
                        <div className="text-center">
                            <p className='font-bold lg:text-lg'>Coupons</p>
                        </div>
                        <div className="m-3 flex flex-wrap justify-center items-center" >
                            {
                                coupon.map((item) => {
                                    return(
                                        <>
                                        
                                    <Card className='sm:w-[300px] rounded   m-2  hover:translate-x-1'>
                                        <div className="flex bg-fuchsia-200 ">
                                            <div className="mt-1 p-1 text-center">
                                                <div className="mt-1 flex justify-between p-2 gap-5 ">
                                                    <p className='font-bold text-lg sm:text-base'>{item.title}</p>
                                                    <p className='font-bold text-lg sm:text-base bg-emerald-600 p-2 text-white rounded  '> {item.code} <i class="fa-solid fa-ticket p-1"></i></p>
                                                    
                                                </div>
                                                <p className='fw-bold '>${item.offerRate}</p>
                                                <p>{item.discription}</p>

                                                <button className='m-2 text-teal-800  hover:bg-slate-300 p-1 border-1 border-emerald-600 rounded text-center font-semibold hover:translate-x-1' onClick={""}>Copy code</button>
                                            </div>
                                        </div>
                                    </Card>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>



            </div>


        </>
    )
}

export default Coupon
