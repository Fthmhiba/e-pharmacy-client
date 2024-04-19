import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserManagement() {

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

    
    // const UserManagement = [
    //     {
    //         userId:"user id",
    //         userfname: "user fname",
    //         userlname: "user lname",
    //         date: "date"
    //     },
    //     {
    //         userId:"user id",
    //         userfname: "user fname",
    //         userlname: "user lname",
    //         date: "date"
    //     },
    //     {
    //         userId:"user id",
    //         userfname: "user fname",
    //         userlname: "user lname",
    //         date: "date"
    //     }
    // ]

  return (
    <>
    <div className="">
      <h4 className="text-center text-lg m-6 fw-bold text-teal-800">Users</h4>

      <div className=" m-3">
        <table className=' w-[80%] m-auto  table   bg-slate-300 p-5 rounded shadow'>
          <tr className='flex items-center  justify-between gap-3 text-lg m-1  p-2'>
            <th className=''>Profile</th>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Created At </th>
            <th>Action</th>

          </tr>
          <div >
            {
              users.map((item) => {
                return (
                  <>


                    <tr className='p-3'>
                      <td className=' '><Avatar/></td>
                      <td>{item._id}</td>
                      <td className=' '>{item.userFname} {item.userLname}</td>
                      <td>{item.userEmail}</td>
                      <td>{item.createdAt}</td>
                      <td>
                      <Link to={`/admin/users/${item._id}`}>
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

export default UserManagement