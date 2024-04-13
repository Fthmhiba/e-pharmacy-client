import React, { useEffect, useState } from 'react'

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
        <div className='flex flex-wrap justify-center'>
            {
                Offercard.map((item) => {
                    return (
                        <>

                            <div className="flex flex-col lg:flex-row w-full md:flex-col sm:flex-col items-center justify-evenly text-slate-700 bg-slate-300 px-5 m-2 py-5">
                                <div className="">
                                    <p className=' fw-bold  fs-6'>Today's Hot Offer</p>
                                    <h3 className='fw-bolder fs-2 text-xl p-1'>{item.title}</h3>
                                    <p className='my-2'>{item.description}</p>
                                    <button className='bg-teal-900 hover:bg-teal-700 p-2 sm:p-3 rounded-lg text-white mt-5'>Order Now <i class="fa-solid fa-chevron-right"></i></button>

                                </div>
                                <img src={item.image} className='w-[600px] sm:w-[500px]' alt="" />
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