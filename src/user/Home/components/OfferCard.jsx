import React, { useEffect, useState } from 'react'
import { errorToast } from '../../../Components/toast';
import axios from "axios"


function OfferCard() {
    const [Offercard, setOffercard] = useState([]);


    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async (e) => {
        try {
            const response = await axios.get("http://localhost:3002/api/offercards", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("usertoken")} `
                }
            })
            console.log(response, "res");

            setOffercard(response.data.Offercard)
        } catch (error) {
            errorToast(error.message);
        }
    };

    return (
        <div className=''>
            {
                Offercard.map((item,index) => {
                    return (
                        <>
                            
                            <div className='flex h-96 justify-center rounded align-items-center  text-left' style={{backgroundImage:"url('https://images.pexels.com/photos/3850725/pexels-photo-3850725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
                            <div  className="flex flex-col lg:flex-row w-full md:flex-col sm:flex-col items-center justify-evenly text-stone-200  px-5 m-2 py-5">
                                <div className="">
                                    <p className=' fw-bold  fs-6'>Today's Hot Offer</p>
                                    <h3 className='fw-bolder fs-2 text-xl p-1'>{item.title}</h3>
                                    <p className='my-2'>{item.description}</p>
                                    <button className='bg-teal-900 hover:bg-teal-700 p-2  rounded-lg text-white '>Order Now <i class="fa-solid text-xs fa-chevron-right"></i></button>

                                </div>
                                {/* <img src={item.image} className='w-[600px] sm:w-[]'   alt="" /> */}
                            </div>
                   
                </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default OfferCard
// <h2 className='fw-bolder fs-2 text-xl p-1'>Unlock 50% Off on <br />
// Essential Medicines!</h2>