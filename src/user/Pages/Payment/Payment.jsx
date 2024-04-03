import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
    return (
        <div className='m-5 h-screen'>
            <div className='border-1 rounded shadow text-teal-800 p-1 w-[400px] m-auto h-[520px]'>
                <h2 className='font-bold text-2xl text-center p-3'>Payment details</h2>
                <div className=" ">
                    <form action="" className='flex justify-around items-center p-1'>
                        <div className="flex justify-around items-center gap-2">
                            <input type="radio" name="radio" value='creditcard' />
                            <p>Credit Card</p>
                        </div>
                        <div className="flex justify-around items-center gap-2">
                            <input type="radio" name="radio" value='paypal' />
                            <p>Paypal</p>
                        </div>
                        <div className="flex justify-around items-center gap-2">
                            <input type="radio" name="radio" value='upi' />
                            <p>UPI</p>
                        </div>
                    </form>
                </div>
                <div className="p-2 text-gray-400 ">
                    <div className="p-2">
                        <p className=''>Card Holder Name </p>
                        <input type="text" required placeholder='Name' className='w-80 border-2 rounded ps-3 p-1 text-sm' />

                    </div>
                    <div className="p-2">
                        <p>Credit Card Number </p>
                        <input type="text" required placeholder='XXXX XXXX XXXX XXXX' className='w-80 border-2 rounded ps-3 p-1 text-sm' />

                    </div>
                    <div className="flex justify-around items-center">
                        <div className="">
                            <p>Expiry date </p>
                            <input type="date" required placeholder='MM/YY' className='w-40 border-2 rounded ps-3 p-1 text-sm' />

                        </div>
                        <div className="">
                            <div className="">
                                <p>CCV </p>
                                <input type="text" placeholder='XXX' className='w-40 border-2 rounded ps-3 p-1 text-sm' />

                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className="p-3 text-lg fw-semibold  items-center flex justify-between">
                    <p>Total amount</p>
                    <p>$1880</p>
                </div>
                <Link to={"make-payment"}>
                    <button className='bg-teal-800 text-white p-2 rounded w-80 m-4'>Make payment</button>
                </Link>
            <p className='text-xs ps-3 '><i class="fa-solid fa-triangle-exclamation text-danger "></i>Lorem ipsum dolor sit elit. Similique, voluptatibus?</p>
            </div>
        </div>
    )
}

export default Payment
