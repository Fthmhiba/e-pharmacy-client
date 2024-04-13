import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

        <div className="flex flex-wrap justify-center gap-5 m-5">
            {
                users.map((item)=>{
                    return(
                        <>
                        <div className="p-5 border border-teal-900 rounded-xl shadow-md w-[150px] sm:w-[200px]">
                            <Avatar/>
                            <p className='text-xs my-2 text-slate-600'>{item._id}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userFname} {item.userLname}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userEmail}</p>
                            <p className='text-xs text-slate-600'>created At : </p>
                            <p className='text-xs text-slate-600'>{item.createdAt}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default UserManagement