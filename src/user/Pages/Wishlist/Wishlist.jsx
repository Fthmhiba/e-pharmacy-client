import React, { useContext, useEffect, useState } from 'react';
import { Card } from '@mui/material'
import { Link } from 'react-router-dom';
import { Context } from '../../../App';
import axios from 'axios';


function Wishlist () {
const { wishlist, setWishlist, count, refresh, setRefresh } = useContext(Context)

const fetchdata = async () => {
  try {
      const response = await axios.get('http://localhost:3001/api/wishlist/viewall')
      setWishlist(response.data.result)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
fetchdata()
}, [refresh])

//  add 
  const addToWishlist = (e) => {
    
  };

  // remove 
  const handleRemoveQuantity = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/wishlist/remove-wishlist/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`)
      setRefresh(!refresh)
      successToast("Removed succesfully")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p className=" text-center p-2" >
        <Link to={"/"} > <span className='hover:text-lime-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>

      </p>
      <div className="p-2 flex flex-wrap lg:flex-col p-sm-2     justify-center items-center ">
        {/* {
          cart?.length > 0 ? */}
            <div className="flex flex-wrap justify-center">
              <div className="bg-slate-100 m-4 border shadow p-5 rounded-lg lg:w-[700px]  md:w-[550px]  ">
                <div className="flex justify-between items-center">
                  <p className='font-bold'>Wishlist</p>
                  <p className='font-bold'>{wishlist.length} items</p>
                </div>
                <div className="m-3 flex flex-wrap justify-center" >
                  {
                    wishlist.map((item) => {

                      return (
                        <>
                          <Card className='w-[330px] m-2 p-2 hover:translate-x-1'>
                            <div className="flex ">
                              <img src={item.productInfo.mainImage} alt="" className='w-[100px] m-1' />
                              <div className="mt-3 p-2">
                                <p>{item.productInfo.name}</p>
                                <div className="mt-3 flex justify-between p-3 gap-5 ">
                                  <p className='font-bold text-xs sm:text-base'>{item.productInfo.price * item.quantity}</p>
                                  
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
                
              </div>
            </div>

             {/* :
             <p>Wishlist is empty</p>

         } */}

      </div>


    </>
  );
};

export default Wishlist;
