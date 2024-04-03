import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className='m-5 h-screen text-teal-800'>
            <div className='border-1 rounded shadow  p-1 w-[400px] m-auto h-[520px]'>
                <h2 className='font-bold text-2xl text-center text-teal-700 p-3'>Address</h2>
                <div className=" ">

                </div>
                <div className="p-2 text-gray-400 ">
                    <div className="p-2">
                        <p className=''>Contact Details </p>
                        <input type="text" required placeholder='Full name' className='w-80 border-2 rounded ps-3 m-1 p-1 text-sm' />
                        <input type="text" required placeholder='Mobile no.' className='w-80 border-2 rounded ps-3 m-1 p-1 text-sm' />

                    </div>
                    <div className="p-2">
                        <p>Address </p>
                        <input type="text" required placeholder='Pincode' className='w-80 border-2 rounded ps-3 p-1 m-1 text-sm' />
                        <input type="text" required placeholder='Address(House No. Building Street Area)' className='m-1 w-80 border-2 rounded ps-3 p-1 text-sm' />
                        <input type="text" required placeholder='Locality or town' className='w-80 border-2 rounded m-1 ps-3 p-1 text-sm' />
                        <input type="text" required placeholder='City/District' className='w-40 border-2 rounded ps-3 p-1 m-1 text-sm' />
                        <input type="text" placeholder='State' className='w-40 border-2 rounded ps-3 p-1 m-1 text-sm' />

                    </div>

                    <select name="payment mode" className="p-2 text-gray-400 border-2" id="">
                        <option value="cash on delivery">payment mode</option>
                        <option value="cash on delivery">Cash on delivery</option>
                        <option value="cash on delivery">Online payment</option>

                    </select>
                </div>
                <br />
                <hr />
                <Link to={"/order"}>
                    <button className='bg-teal-800 text-white p-2 rounded w-80 m-4'>Continue</button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
