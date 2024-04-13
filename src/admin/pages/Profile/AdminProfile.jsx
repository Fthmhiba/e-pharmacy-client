import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { errorToast } from '../../../Components/toast'

function AdminProfile() {

  const [profile,setProfile] = useState({})
  const [refresh,setRefresh] = useState(true)

  
  const navigate = useNavigate();

  const logout = ()=>{
      localStorage.removeItem("admintoken")
      localStorage.removeItem("adminData")
      navigate('/admin-signup')
  }

  useEffect(()=>{
    fetchData()
  },[refresh])

  const fetchData = async() =>{
    try {
      const response = await axios.get(`http://localhost:3002/api/admin/profile/${JSON.parse(localStorage.getItem("adminData"))._id }`,{headers:{
        'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
      }})

      setProfile(response.data.user)

    } catch (error) {
      errorToast(error.message);
    }
  }

  return (
    <>
    <div className="flex justify-center">
        <div className="m-5 p-5 bg-slate-100 w-[200px] sm:w-[300px] rounded-2xl">
            <Avatar src={profile?.profile}/>    
            <p className='text-xs sm:text-base mt-2'>First Name : {profile.fname}</p>
            <p className='text-xs sm:text-base'>Second Name : {profile.lname}</p>
            <p className='text-xs sm:text-base'>Email_id : {profile.email}</p>
            <Link to={'update'}><button className='text-xs sm:text-base border mt-3 px-3 border-teal-900 rounded hover:bg-teal-900 hover:text-white'>Update</button></Link>
            <p className='text-xs sm:text-base'>
              <button onClick={logout} className='text-xs sm:text-base text-teal-900 font-bold'>Logout</button>
            </p>
        </div>
    </div>
    <div className="flex justify-center mt-5">
      <Outlet />
    </div>
    </>
  )
}

export default AdminProfile