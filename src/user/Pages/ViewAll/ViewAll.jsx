import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast'
import { red } from '@mui/material/colors'

function ViewAll() {

    const [data, setData] = useState([])
    const [color, setColor] = useState("bg-teal-700")



    useEffect(() => {
        fetchdata()
    }, [])

    const handleAddToCart = async (e) => {
        try {
            console.log('api');
            const response = await axios.post('http://localhost:3001/api/cart/addToCart', { productId: e, userId: JSON.parse(localStorage.getItem("userData"))?._id });
            console.log(response);

            successToast("Succesfully Added into Cart")

        } catch (error) {
            console.log(error);
        }
    };

    const handleAddToWishlist = async (e) => {
        try {
          console.log('api');
          const response = await axios.post('http://localhost:3001/api/wishlist/addToWishlist', { productId: e, userId: JSON.parse(localStorage.getItem("userData"))?._id });
          console.log(response);
          setColor("bg-danger")
    
          successToast("Succesfully Added into Wishlist")
          if (!wishlist.find((i) => i.id === item.id)) {
            setWishlist([...wishlist, item]);
            
          }else{
            errorToast("already in the wishlist")
          }
    
        } catch (error) {
          console.log(error);
        }
      };

    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/products")
            setData(response.data.products);
        } catch (error) {
            console.log(error, 'error');
        }
    }

    return (
        <>
            <div className="flex flex-wrap justify-center  ">
                <p className=" hover:text-lime-500" >
                    <Link to={"/"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
                </p>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <Card className='border w-[130px] sm:w-[250px] sm:h-[350px] m-5 flex flex-col shadow justify-between hover:translate-x-1 '>
                                    <Link to={`/products/${item._id}`} state={item} >
                                    <button type='button'  onClick={() => {
                                        handleAddToWishlist(item._id)
                                        setColor("danger")
                                        }}  className={`py-1 px-2 sm:py-2 sm:px-8 m-2 rounded absolute  text-white text-xs sm:text-base ${color}`}
                                        ><i class="fa-regular text-lg fa-heart"  ></i> </button>

                                        <div key={index} className="h-[130px] sm:h-[240px]">
                                            <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                        </div>
                                        <div className="border-t-2 p-2">
                                            <p className='text-xs sm:text-xl font-bold'>{item.name}</p>
                                            <p className='text-xs sm:text-base'>{item.price}</p>
                                        </div>
                                    </Link>
                                    <Link >
                                    
                                        <div className="bg-teal-600 text-slate-300 p-2 flex items-center justify-between " onClick={() => {
                                            handleAddToCart(item._id)
                                        }}>
                                            <p>Add to Cart </p>
                                            <i class="fa-solid fa-basket-shopping"></i>
                                        </div>
                                        

                                    </Link>
                                </Card>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ViewAll;