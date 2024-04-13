import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast';

function ViewCoupons() {
  const [coupon, setCoupon] = useState([]);
  const [refresh, setRefresh] = useState(true);

  // const Cards = [
  //     {
  //       offer_title: "Card 1",
  //       offer_description: "description about it......"
  //     },
  //     {
  //       offer_title: "Card 2",
  //       offer_description: "description about it......"
  //     },
  //     {
  //       offer_title: "Card 3",
  //       offer_description: "description about it......"
  //     }
  //   ]


  useEffect(() => {
    fetchData()
  }, [refresh])

  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3002/api/coupons", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      console.log(response, "res");

      setCoupon(response.data.Coupon)
    } catch (error) {
      errorToast(error.message);
    }
  }



  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3002/api/coupons/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })

      setRefresh(!refresh)
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.message);
    }
  }


  return (
    <>
      <table className='w-[80%] m-auto table  bg-teal-50 p-4 rounded shadow'>
        <tr className='flex items-center justify-stretch  gap-10 text-lg m-1  p-2'>
          <th className=''>Title</th>
          <th>Description</th>
          <th>Timeline</th>
          <th>Code</th>
          <th>Actions</th>
        </tr>
        <div >
          {
            coupon.map((item) => {
              return (
                <>


                  <tr className=''>
                    <td className='p-2 m-1 '>{item.title}</td>
                    <td className=' '>{item.description}</td>
                    <td className='p-2 m-1 '>{item.timeline}</td>
                    <td className=' '>{item.offerRate}</td>
                    <td>
                      <Link to={`/admin/coupons/edit-coupons/${item._id}`} state={item}>
                        <button className='border border-teal-900  px-2 m-1 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Edit</button>
                      </Link>
                    </td>
                    <td>

                      <Link to={`/admin/coupons/delete-coupon/${item._id}`} state={item}>
                        <button onClick={() => handleDelete(item._id)} className='border border-teal-900  px-2 m-1 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Delete</button>
                      </Link>
                    </td>
                  </tr>

                </>
              )
            })
          }
        </div>

      </table>
    </>
  )
}

export default ViewCoupons