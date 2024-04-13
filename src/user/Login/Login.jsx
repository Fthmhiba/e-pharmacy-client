import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../Components/toast";
import axios from "axios";


function Login() {
  const [userPassword, setuserPassword] = useState('');
  const [userEmail, setuserEmail] = useState('');

  const navigate = useNavigate();
  
  let formData = {
    userEmail: userEmail,
    userPassword: userPassword,
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/api/user/login', formData );
      successToast(response.data.message)
  
      // console.log(response.data.token);
  
      if(!response.data.token){
       return errorToast('token is not provided')
      }

      localStorage.setItem("usertoken",response.data.token)
      localStorage.setItem("userData", JSON.stringify(response.data.users))
      navigate("/")

     } catch (error) {
      errorToast(error.response.data.message, 'err')
        console.log(error,'logerror');
      
     }
    
  };
 


  return (
    <div className=" bg-gradient-to-r from-teal-600  h-[100vh] via-emerald-500  to-teal-700  p-5">
      <div className="bg-emerald-500 shadow rounded p-3 m-auto w-[500px] mt-5 ">
      <h2 className="p-4 text-lg fw-semibold text-white ">Login</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col justify-center  gap-3"
      >
        <input className='rounded   '
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
            required
          />
          <input className='rounded   '
            type="password"
            placeholder="Enter your password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
            required
          />
          <button type="submit" className='hover:bg-white hover:text-teal-900 rounded border w-20 m-auto'>Login</button>

        
        <NavLink to={'/user-signup'}>
        <p className="text-white text-xs underline text-center "> Signup  </p>
        </NavLink>
      </form>
      </div>
     
    </div>
  );
}

export default Login;
