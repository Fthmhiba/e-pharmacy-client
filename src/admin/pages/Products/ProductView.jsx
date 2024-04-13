import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { errorToast, successToast } from '../../../Components/toast';


function ProductView() {

  const [products, setProduct] = useState([]);
  const [refresh, setRefresh] = useState(true);


  useEffect(() => {
    fetchData()
  }, [refresh])


  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3002/api/products", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      console.log(response, "res");

      setProduct(response.data.products)
    } catch (error) {

      setProduct([])
      errorToast(error.message)
    }
  }

  console.log(products, '---');


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3002/api/products/${id}`, {
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
      <div className="p-2  bg-slate-100 m-3">
        <table className='table '>
          <tr className=' '>
            <th>Main Image</th>
            <th>Images</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Details</th>
            <th>Delivery charge</th>
            <th>Actions</th>
          </tr>
          {
            products.map((item, index) => {
              return (
                <>
                  <tr className='bg-white '>
                    <td className=''>
                      <img src={item.mainImage} alt="" className=' w-[300px] sm:w-[380px] sm:h-[70px]' />

                    </td>
                    <td>

                      <div className="flex flex-wrap ">
                        {
                          item.image.map((item) => {
                            return (
                              <>
                                <img src={item.image} className='bg-slate-300 w-[50px] h-[50px] sm:w-[70px] sm:h-[]' alt="Loading..." />
                              </>
                            )
                          })
                        }
                      </div>
                    </td>

                    <td>
                      <p className='text-xs sm:text-base'>{item.categoriesInfo.name}</p>

                    </td>
                    <td>

                      <p className='text-xs sm:text-base'>{item.name}</p>
                    </td>
                    <td>

                      <p className='text-xs sm:text-base'> {item.price}</p>
                    </td>
                    <td>

                      <p className='text-xs sm:text-base'> {item.details}</p>
                    </td>
                    <td>

                      <p className='text-xs sm:text-base'> {item.delivery}</p>
                    </td>

                    <td>

                      <div className="flex justify-center gap-3">
                        <Link to={`/admin/products/edit-product/${item._id}`} state={item}><button className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Edit</button></Link>
                        <button onClick={() => handleDelete(item._id)} className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Delete</button>
                      </div>
                    </td>

                  </tr>
                </>
              )
            })
          }


        </table>
      </div>
    </>
  )
}

export default ProductView