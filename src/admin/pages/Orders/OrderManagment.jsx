import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { errorToast } from '../../../Components/toast';

function OrderManagement() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
      fetchUsers()
    },[])
  
    const fetchUsers=async()=>{
      try {
        const response = await axios.get("http://localhost:3002/api/user")
         console.log(response,"responseee");    
        setUsers(response.data.users)      
      } catch (error) {
        errorToast(error.message || 'error')
      }
    }


   
  return (
    <>
    <div className="">
        <div className=" m-5">
        <table className=' w-[80%] m-auto  table   bg-slate-100 p-5 rounded shadow'>
          <tr className='flex items-center  justify-between gap-3 text-lg m-1  p-2'>
            <th className=''>Profile</th>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>

          </tr>
          <div >
            {
              users.map((item) => {
                return (
                  <>


                    <tr className='p-3 flex items-center justify-around'>
                      <td className=' '><Avatar/></td>
                      <td>{item._id}</td>
                      <td className=' '>{item.userFname} {item.userLname}</td>
                      <td>{item.userEmail}</td>
                      <td>
                      <Link to={`/admin/orders/user/${item._id}`}>
                            <button className='border-1 border-teal-900 px-2 rounded-lg hover:text-white hover:bg-teal-900'>Manage</button>
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
    </div>
    </>
  )
}

export default OrderManagement