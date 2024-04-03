import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";

function Layout() {
    const [tokenState, setTokenState] = useState(Boolean(localStorage.getItem("usertoken")));

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenState) {
      navigate('/user-login')
    }
  }, [navigate, tokenState]);
 

  return (
    <div>
      {
        tokenState?
      
        <div className="bg-stone-100  text-teal-700 " >
            <Header/>
            <div className="">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        :
        navigate('/user-login')

      }
    </div>
  )
}

export default Layout
