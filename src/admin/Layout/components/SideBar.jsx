import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   logoutAdmin();
  // }, []);

  const logoutAdmin = () => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminData");
    navigate('/admin-login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-xl shadow-2xl bg-teal-700 text-slate-200  ">
      <button onClick={toggleSidebar} className=" p-2 rounded-lg   text-sm text-white">
        {isOpen ? <p className='text-xl '><i class="fa-solid fa-close"></i></p> : <p className='text-xl w-5 '><i class="fa-solid  fa-bars"></i></p>}
      </button>
      {
        isOpen && (
          <ul className="p-2 ">

            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={""}> Home </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"banners"}> Banner </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"blogs"}> Blogs </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"offer-cards"}> Offer Card </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"cards"}> Cards </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"coupons"}> Coupons </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"products"}> Products </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"categories"}> Categories </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"users"}> User Management </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"orders"}> Order Management </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink to={"profile"}> Profile </NavLink>
            </li>
            <li className="text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100 hover:text-teal-900">
              <NavLink onClick={logoutAdmin}> Logout </NavLink>
            </li>


          </ul>
        )
      }
    </div>
  );
}

export default SideBar;
