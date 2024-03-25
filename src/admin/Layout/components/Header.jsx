import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../../../Components/toast';
import { Avatar } from '@mui/material'

function Header() {
    const [ user, setUser ] = useState([{}]);

    useEffect(()=>{
      fetchData()
    },[])
  
    const fetchData = async () =>{
      try {
        const response = await axios.get("http://localhost:3001/api/admin/profile",{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("admintoken")}`
        } 
        })
  
        setUser(response.data.user)
  
      } catch (error) {
        errorToast(error.message);
      }
    }
  return (
    <div className=' '>
        <div className="bg-teal-800 text-slate-200 p-2  flex items-center justify-between">
          <h3 className='text-lg fw-semibold p-1' style={{fontFamily:"cursive"}} >Phar.Co</h3>
            <div className="flex items-center ">
            <p className='text-white text-xs '>
              {user.fname} {user.lname}</p>
                
              <Avatar></Avatar>

            </div>
            
        </div>
    </div>
  )
}

export default Header
