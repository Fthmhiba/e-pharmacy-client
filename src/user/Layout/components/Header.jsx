import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div  >
      <header className="bg-teal-700 text-slate-200">
        <div className=" flex justify-between  items-center p-3 shadow  ">
          <h3 className='text-lg fw-semibold ' style={{fontFamily:"cursive"}} >Phar.Co</h3>
          <form action="">
            <input
              type="text"
              value=""
              onChange="handleChange"
              placeholder="Search medicine, medical products"
              className="border border-gray-300 px-3 py-1 rounded-lg focus:outline-none focus:border-blue-500 pe-3   "
            />
            <button type="submit" className="bg-teal-800  px-4 py-2 rounded-lg hover:shadow-white">Search</button>
          </form>
          <div className="flex gap-4 justify-center items-center fs-5">
          <NavLink to={"Wishlist"}> <p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-regular fa-heart"></i></p>   </NavLink>
            <NavLink to={"cart"}><p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-solid fa-basket-shopping"></i></p></NavLink>
            <p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-regular fa-user relative flex">

              <span onClick={toggleDropdown} className="flex items-center ">
                <i class="fa-solid fa-angle-down text-gray-300 fs-5  "></i>
              </span>
              {isOpen && (
                <span className="absolute right-1 rounded fs-6 mt-4 bg-slate-300 text-slate-500 "  >
                  {/* Dropdown content */}
                  <ul className='p-3 flex flex-col gap-1' style={{ fontSize: "14px" }} >
                    <li>SignUp</li>
                    <li>Settings</li>
                    <li>Logout</li>
                  </ul>
                </span>
              )}
            </i>
            </p>


          </div>
        </div>
      </header>

    </div >
  )
}

export default Header
