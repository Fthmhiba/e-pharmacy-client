import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className='rounded   '
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
