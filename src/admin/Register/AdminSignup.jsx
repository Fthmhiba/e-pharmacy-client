import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { errorToast, successToast } from '../../Components/toast';

function AdminSignup() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [formFiled, setFormField] = useState({});


  const navigate = useNavigate();

  let formDatas = {
    email:email,
     fname: fname,
      lname: lname,
       password: password,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/admin/register', formDatas );
      successToast(response.data.message)
      navigate('/admin-login'); 
    } catch (error) {
      console.error(error);
      errorToast(error.response.data.message,'err')
    }
  };
  return(

    <div className=" bg-gradient-to-r from-teal-600  h-[100vh] via-emerald-500  to-teal-700  p-5">
      <div className='bg-emerald-500 shadow rounded p-3 m-auto w-[500px] mt-5'>
        <h2 className='p-4 text-lg fw-semibold text-white'>Admin Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center  gap-3'>
          <input className='rounded   '
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className='rounded   '
            type="name"
            placeholder="Enter your fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input className='rounded   '
            type="name"
            placeholder="Enter your lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input className='rounded   '
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          
              <button type="submit" className='hover:bg-white hover:text-teal-900 rounded border w-20 m-auto'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default AdminSignup
