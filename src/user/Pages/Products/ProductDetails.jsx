import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { successToast } from '../../../Components/toast';
import { Card } from '@mui/material';

function ProductDetails() {
  const [data, setData] = useState([])


  const { prdctdetails } = useParams();
  const { state } = useLocation();

  const item = state;

  const handleAddToWishlist = async () => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3002/api/wishlist/addToWishlist', { productId: item._id, userId: JSON.parse(localStorage.getItem("userData"))?._id });
      console.log(response);


      successToast("Succesfully Added into Wishlist")

    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3002/api/cart/addToCart', { productId: item._id, userId: JSON.parse(localStorage.getItem("userData"))?._id });
      console.log(response);

      successToast("Succesfully Added into Cart")

    } catch (error) {
      console.log(error);
    }
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/products")
      setData(response.data.products);
    } catch (error) {
      console.log(error, 'error');
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <p className=" hover:text-lime-500 p-2" >
        <Link to={"/"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <div className="m-4">
          <img src={item?.mainImage} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
          <div className="flex">
            {
              item?.image?.map((image) =>
                <img src={image?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />)
            }
          </div>
          <div className="">
            <button type='button' onClick={() => handleAddToWishlist(item._id)} className='bg-teal-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button>

            <button type='button' onClick={() => handleAddToCart(item._id)} className='bg-teal-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
            <Link to={"/checkout"} >
              <button className='bg-teal-700 py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'> BUY NOW</button>

            </Link>

          </div>
        </div>

        <div className="">
          <div className="border-b-2 p-5">
            <p className='text-teal-900 text-lg sm:text-xl font-semibold'>{item?.name}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-solid fa-indian-rupee-sign"></i>{item?.price}</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-solid fa-truck"></i>Free Delivery</p>
          </div>

          <div className="mt-3">
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-solid fa-retweet"></i> Easy returns and exchanges</p>
            <p className='text-teal-900 text-xs sm:text-base'><i class="fa-solid fa-truck"></i>Cash on Delivery Available</p>
          </div>

          <div className="mt-10">
            <p className='sm:text-2xl text-slate-500'>Product Details</p>
            <p className='text-xs sm:text-base'>name :{item?.name}</p>
            <p className='text-xs sm:text-base'>price : {item?.price}</p>
            <p className='text-xs sm:text-base'>Details :{item?.details} </p>
            <p className='text-xs sm:text-base'>Available</p>
          </div>

        </div>
      </div>
      <hr />
      <div className="p-2 flex-wrap flex">
        <p>You may also like</p>

        <div className="flex justify-center overflow-x-scroll">
          {
            data.map((item, index) => {
              return (
                <>
                  <Card className=' border w-[130px] sm:w-[120px] sm:h-[250px] m-3 flex  shadow justify-between items-center hover:translate-x-1 '>
                    <Link to={`/products/${item._id}`} state={item} >
                      <button type='button' onClick={() => {
                        handleAddToWishlist(item._id)
                      }} className={`py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute  text-white text-xs sm:text-base `}
                      ><i class="fa-regular text-lg fa-heart"  ></i> </button>

                      <div key={index} className="h-[130px] sm:h-[140px]">
                        <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                      </div>
                      <div className="border-t-2 p-2">
                        <p className='  font-bold'>{item.name}</p>
                        <p className=' sm:text-base'>{item.price}</p>
                      </div>
                    </Link>
                    <Link >

            


                    </Link>
                  </Card>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductDetails