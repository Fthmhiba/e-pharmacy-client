import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Card } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../../../App';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { cart, wishlist } = useContext(Context)

  const handleSubmitSearch = async (srch) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/products/search?name=${srch}`)
      setSearchResult(response.data.result)
    } catch (error) {
      console.log(error);
    }
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  >
      <header className="bg-teal-700 text-slate-100">
        <div className=" flex justify-between  items-center p-3 shadow  ">
          <h3 className='text-lg fw-semibold ' style={{ fontFamily: "cursive" }} >Phar.Co</h3>
          {/* ----------------- */}
          <form action="">
            <input
              type="text"
              value=""
              onChange={(e) => {
                setSearch(e.target.value)
                handleSubmitSearch(e.target.value)
              }}
              placeholder="Search medicine, medical products"
              className="border border-gray-300 px-3 py-1 rounded-lg focus:outline-none focus:border-blue-500 pe-3   "
            />
            <button type="submit" onClick={handleSubmitSearch} className="bg-teal-800  px-4 py-2 rounded-lg hover:shadow-white">Search</button>
          </form>
          {
            search?.length > 0 && <div className='max-h-80 overflow-y-scroll absolute top-16 bg-white w-[400px] px-4'>
              {
                searchResult.map((item) => {
                  <Card className='border w-[130px] sm:w-[250px] sm:h-[350px] m-5 flex flex-col shadow justify-between hover:translate-x-1 '>
                    <Link to={`/products/${item._id}`} state={item} >
                      <div className="h-[130px] sm:h-[240px]">
                        <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                      </div>
                      <div className="border-t-2 p-2">
                        <p className='text-xs sm:text-xl font-bold'>{item.name}</p>
                        <p className='text-xs sm:text-base'>{item.price}</p>
                      </div>

                    </Link>
                  </Card>
                })
              }
            </div>
          }
          {/* --------------------- */}

          <div className="flex gap-4 justify-center items-center fs-5">
            <NavLink to={"coupons"}> <p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-solid fa-ticket"></i></p>   </NavLink>
            <NavLink to={"Wishlist"}> <p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-regular fa-heart"></i><span className='text-base bg-emerald-600 rounded-2xl p-1 hover:text-white'>{wishlist.length}</span></p>   </NavLink>
            <NavLink to={"cart"}><p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'>
              <i class="fa-solid fa-basket-shopping"></i> <span className='text-base bg-emerald-600 rounded-2xl p-1 hover:text-white'>{cart.length}</span> </p></NavLink>
            <p className='hover:bg-slate-200 rounded-full hover:text-teal-700 p-1'><i class="fa-regular fa-user relative flex">

              <span onClick={toggleDropdown} className="flex items-center ">
                <i class="fa-solid fa-angle-down text-gray-300 fs-5  "></i>
              </span>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to={'profile'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      My Account
                    </Link>

                    <Link to={''}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      Home
                    </Link>

                    <Link to={'order'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>

                    <Link to={'cart'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      Cart
                    </Link>

                    <Link to={'wishlist'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      Wishlist
                    </Link>

                    <Link to={'/admin'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      Admin
                    </Link>

                    <Link to={'/user-signup'}
                      className="block px-4 py-2 text-sm text-teal-900 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
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
