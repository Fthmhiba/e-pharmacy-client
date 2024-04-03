import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { errorToast, successToast } from '../../../Components/toast';

function ViewCategory() {
  const [ category, setCategory ] = useState([]);
  const [ refresh, setRefresh ]  = useState(true);

  const navigate = useNavigate()

  // const categories = [
  //   {
  //     category_name: "Category 1",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 2",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 3",
  //     cate_description: "description about it......"
  //   }
  // ]


  useEffect(()=>{
    fetchData()

  },[refresh])

  const fetchData = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3001/api/categories",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
        }})
        console.log(response,"res");
  
        setCategory(response.data.Category)
      } catch (error) {
        errorToast(error.message);
      }
}


const handleDelete = async(id) =>{
  try {
    const response = await axios.delete(`http://localhost:3001/api/categories/${id}`,{headers:{
          'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
        }})
    
        setRefresh(!refresh)
    successToast("Deleted Succesfully")
    navigate('/admin/categories')
    

  } catch (error) {
    errorToast(error.message);
  }
}


  return (
    <>
    <div className=" ">
    <table className='w-[80%] m-auto table  bg-teal-50 p-4 rounded shadow'>
                <tr className='flex items-center gap-2 text-lg m-1  p-2'>
                    <th className=''>Category</th>
                    <th>Description</th>
                    
                </tr>
                <div >
      {
        category.map((item)=>{
          return(
          <>

           
                <tr className=''>
                    <td className='p-2 m-1 '>{item.name}</td>
                    <td className=' '>{item.description}</td>
                    <td>
                    <Link to={`/admin/categories/edit-category/${item._id}`} state={item}>
                        <button  className='border border-teal-900  px-2 m-1 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Edit</button>
                        </Link>
                    </td>
                    <td>

                    <Link to={`/admin/categories/delete-category/${item._id}`} state={item}>
                        <button onClick={()=>handleDelete(item._id)} className='border border-teal-900  px-2 m-1 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Delete</button>
                        </Link> 
                    </td>
                </tr>
         
          </>
          )
        })
      }
          </div>

            </table>
    </div>

    </>
  )
}

export default ViewCategory