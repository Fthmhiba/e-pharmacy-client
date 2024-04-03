import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div>
      <div className='m-5 h-screen'>
            <div className='border-1 rounded shadow text-teal-800 p-1 w-[400px] m-auto h-[520px]'>
                <h2 className='font-bold text-2xl text-center p-3'>Order</h2>
                <div className=" ">
                    <form action="" className='flex justify-around items-center p-1'>
                        <div className="flex justify-around items-center gap-2">
                            <input type="radio" name="radio" value='creditcard' />
                            <p>Cash On Delivery</p>
                        </div>
                        <div className="flex justify-around items-center gap-2">
                            <input type="radio" name="radio" value='paypal' />
                            <p>Online Payment</p>
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
                  
                </div>
                <br />
                <hr />
                <div className="p-3 text-lg fw-semibold  items-center flex justify-between">
                    <p>Total amount</p>
                    <p>$1880</p>
                </div>
                <Link to={"/payment"}>
                    <button className='bg-teal-800 text-white p-2 rounded w-80 m-4'>Order</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Orders
