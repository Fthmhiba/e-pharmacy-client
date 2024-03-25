import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Send OTP to the phone number
    console.log('OTP sent to', phoneNumber);
    setVerificationCodeSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify OT
    console.log('OTP Verified:', otp);
  };
  return (

    <div className=" bg-gradient-to-r from-teal-600  h-[100vh] via-emerald-500  to-teal-700  p-5">
      <div className='bg-emerald-500 shadow rounded p-3 m-auto w-[500px] mt-5'>
        <h2 className='p-4 text-lg fw-semibold text-white'>Sign Up</h2>
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
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input className='rounded   '
            type="phone"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          {!verificationCodeSent ? (
            <button className='hover:bg-white m-auto hover:text-teal-900 rounded border w-20' type="button" onClick={handleSendOtp}>
              Send OTP
            </button>
          ) : (
            <>
              <input className='rounded   '
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit" className='hover:bg-white hover:text-teal-900 rounded border w-20 m-auto'>Sign Up</button>
            </>
          )}
          <NavLink to={'/user-login'}>
        <p className="text-white text-xs underline text-center "> Sign In  </p>
        </NavLink>
        </form>
      </div>
    </div>
  )
}

export default Signup
