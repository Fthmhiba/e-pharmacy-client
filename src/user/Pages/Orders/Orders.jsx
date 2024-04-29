import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Orders() {
    
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchdata();
  },[])


  const fetchdata = async ()=>{
      try {
          const response = await axios.get(`http://localhost:3002/api/order/user/${JSON.parse(localStorage.getItem("userData"))._id}`)

          setData(response.data.data);
      } catch (error) {
        setData([]);

          console.log(error);
      }
  }
  return (
    <div>
        <p className=" text-center p-2">
        <Link to={"/"}><span className='hover:text-lime-500'><i class="fa-solid fa-chevron-left text-xs text-center"></i> <i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>
       <div className="bg-slate-100 p-5 rounded-lg w-[350px] md:w-[850px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>My Orders</p>
            <p className='font-bold'>{data.length} items</p>
          </div>
          <div className="flex flex-wrap my-5 gap-5">
      
            {
              data.map((item)=>{
                return(
                  <div key={item._id} className='flex gap-5 border px-3 py-4 shadow-md'>

                    <p>{item.productInfo.name}</p>
                    <p>{item.productInfo.details}</p>
                    <img src={item.productInfo.mainImage} alt="..." loading=''  />
                    <p>{item.payment.price}</p>
                    <p>order id : {item.payment.orderId}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
    </div>
  )
}

export default Orders
