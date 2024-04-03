import { useContext, useEffect, useState } from "react"
import { Card } from '@mui/material'
import axios from "axios"
import { Link } from "react-router-dom"
import { successToast } from "../../../Components/toast"
import { Context } from "../../../App"


function Usercart() {
  const { cart, setCart, count, setCount, refresh, setRefresh } = useContext(Context)


  // useEffect(() => {
  //   fetchdata()

  // }, [refresh])


  // const fetchdata = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/api/cart/listCart/${JSON.parse(localStorage.getItem("userData"))._id}`)
  //     setData(response.data.product);
  //     console.log(data,'fetch');

  //   } catch (error) {
  //     setData([]);

  //     console.log(error);
  //   }
  // }

  const handleIncrementQuantity = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3001/api/cart/increment-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
    }
  }

  const handleDecrementQuantity = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`)

      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveQuantity = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cart/remove-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`)
      setRefresh(!refresh)
      successToast("Removed succesfully")
    } catch (error) {
      console.log(error);
    }
  }

  let totalAmount = 0


  return (
    <>
      <p className=" text-center p-2" >
        <Link to={"/"} > <span className='hover:text-lime-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>

      </p>
    <div className="p-2 flex flex-wrap lg:flex-col p-sm-2     justify-center items-center ">
      {
        cart?.length > 0 ?
          <div className="flex flex-wrap justify-center">
            {/* cart details */}
            <div className="bg-slate-100 m-4 border shadow p-5 rounded-lg lg:w-[700px]  md:w-[550px]  ">
              <div className="flex justify-between items-center">
                <p className='font-bold text-lg'>Shopping Cart</p>
                <p className='font-bold'>{cart.length} items</p>
              </div>
              <div className="m-3 flex flex-wrap">
                {
                  cart.map((item) => {
                    console.log(totalAmount,'total');
                    totalAmount = totalAmount + (item.productInfo.price * item.quantity)

                    return (
                      <>
                        <Card className='w-[330px] m-2 p-2 hover:translate-x-1'>
                          <div className="flex ">
                            <img src={item.productInfo.mainImage} alt="" className='w-[100px] m-1' />
                            <div className="mt-3 p-2">
                              <p>{item.productInfo.name}</p>
                              <div className="mt-3 flex justify-between p-3 gap-5 ">
                                <p className='font-bold text-xs sm:text-base'>{item.productInfo.price * item.quantity}</p>
                                <p className='border px-3 flex gap-3'>
                                  <button className={`font-bold text-lg ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} `} onClick={() => handleDecrementQuantity(item.productInfo._id)} >-</button>
                                  <button className='font-bold text-lg sm:text-base'>{item.quantity}</button>
                                  <button onClick={() => handleIncrementQuantity(item.productInfo._id)}>+</button>
                                </p>

                              </div>
                              <button className=' text-teal-800 text-lg text-center hover:translate-x-1' onClick={() => handleRemoveQuantity(item.productInfo._id)}><i class="fa-solid fa-trash"></i></button>
                            </div>
                          </div>
                        </Card>
                      </>
                    )
                  })
                }

                {/* <button className='text-pink-900 mt-3'><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button> */}
            </div>
            <div className="border-1 p-2 shadow  right-4" >
                <div className="text-left p-1">
                  <p className='font-bold text-lg'>Order Summary</p>
                </div>
                <div className="flex justify-between items-center m-1 p-2">
                  <p>productname</p>
                  <p>$price</p>
                </div>
                <hr />
                <div className="flex justify-between m-1 p-2">
                  <p>Delivery today with  </p>
                  <span className="">$20.00</span>
                </div>
                <p className="fw-semibold p-1 m-1">Skinny Express</p>
                <p className="m-1 p-1">Deliver to <span className="fw-semibold">Jakarta, Indonesia</span></p>
                <hr />
                <div className="p-2 m-1">
                  <p className="flex justify-between m-1" ><span >Amount</span> <span>$totalAmount</span></p>
                  <p className="flex justify-between m-1"><span>Tax</span> <span>$tax</span></p>


                </div>
                <hr />
                <div className="fw-semibold">
                <p className="flex justify-between m-2" ><span >Order Total</span> <span>$totalAmount</span></p>
                </div>
                <div className="text-center justify-center items-center flex ">
                <input className="w-44 rounded border  m-2 p-2" type="text" placeholder="Have a coupon?" /> <span className="absolute ms-[7.75rem] fw-semibold hover:text-pink-800 text-teal-800">Apply</span>

                </div>
                <div className="flex justify-center items-center">
                <Link to={"/checkout"}>
                    <button className=' bg-teal-800 text-white p-2 rounded w-80 m-4'>Checkout</button>
                </Link>
                </div>
              </div>
            </div>
          </div>

          :
          <p>Cart is empty</p>

      }

    </div>


    </>
  )
}

export default Usercart