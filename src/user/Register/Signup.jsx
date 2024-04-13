import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../Components/toast';

function Signup() {
  const [userEmail, setuserEmail] = useState('');
  const [userFname, setuserFname] = useState('');
  const [userLname, setuserLname] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const navigate = useNavigate();

  let formDatas = {
    userEmail: userEmail,
    userFname: userFname,
    userLname: userLname,
    userPassword: userPassword,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/api/user/signup', formDatas);
      successToast(response.data.message)
      navigate('/user-login');
    } catch (error) {
      console.error(error);
      errorToast(error.response.data.message, 'err')
    }
  };
  return (

    <div className=" bg-gradient-to-r from-teal-600  h-[100vh] via-emerald-500  to-teal-700  p-5">
      <div className='bg-emerald-500 shadow rounded p-3 m-auto w-[500px] mt-5'>
        <h2 className='p-4 text-lg fw-semibold text-white'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center  gap-3'>
          <input className='rounded   '
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
            required
          />
          <input className='rounded   '
            type="name"
            placeholder="Enter your first name"
            value={userFname}
            onChange={(e) => setuserFname(e.target.value)}
            required
          />
          <input className='rounded   '
            type="name"
            placeholder="Enter your last name"
            value={userLname}
            onChange={(e) => setuserLname(e.target.value)}
            required
          />

          <input className='rounded   '
            type="password"
            placeholder="Enter your password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
            required
          />
          <br />

          <button type="submit" className='hover:bg-white hover:text-teal-900 rounded border w-20 m-auto'>Sign Up</button>
          <NavLink to={'/user-login'}>
            <p className="text-white text-xs underline text-center "> Sign In  </p>
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default Signup
