import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast } from '../../../Components/toast';

function Categories() {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };


  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3001/api/categories", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      console.log(response, "res");

      setCategories(response.data.Category)
    } catch (error) {
      errorToast(error.message)
    }
  }

  return (
    <>
      {/* header-start */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 p-4  text-teal-900">


        <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto w-[full]">

          {categories && categories.map((item, i) => {
            return (
              <>
                <Link to={`/shopping/${item._id}`} state={item} className="relative">
                  <p className="p-2 rounded-lg  transition-transform">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-lime-400 transition-transform"></span>
                  </p>
                </Link>
              </>
            )
          })
          }


        </div>



        {/* Toggle button */}
        <button onClick={toggleCategories} className='border p-2 rounded-lg sm:hidden text-sm'>
          {showCategories ? <p className='text-xl'><i class="fa-solid fa-circle-xmark"></i></p> : 'Show Categories'}
        </button>
        {/* to smaller scrn */}
        {
          showCategories && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-between p-4 text-pink-900">


              <nav>
                <div className="">
                  <ul className='flex flex-wrap gap-md-2  p-4  justify-content-center gap-lg-5   items-center  text-wrap text-sm text-teal-600  '>
                    <Link to={`/shopping/${'pain-Relief'}`}><li className='hover:text-rose-900'>Pain Relief</li></Link>
                    <Link to={`/shopping/${'Cold and Flu'}`}><li className='hover:text-rose-900'>Cold and Flu</li></Link>
                    <Link to={`/shopping/${'Diabetes Care'}`}><li className='hover:text-rose-900'>Diabetes Care</li></Link>
                    <Link to={`/shopping/${'Digestive Health'}`}><li className='hover:text-rose-900'>Digestive Health</li></Link>
                    <Link to={`/shopping/${'First Aid'}`}><li className='hover:text-rose-900'>First Aid</li></Link>
                    <Link to={`/shopping/${'Skin Care'}`}><li className='hover:text-rose-900'>Skin Care</li></Link>
                    <Link to={`/shopping/${'Child and Baby Care'}`}><li className='hover:text-rose-900'>Child and Baby Care</li></Link>
                    <Link to={`/shopping/${'Heart Health'}`}><li className='hover:text-rose-900'>Heart Health</li></Link>
                    <Link to={`/shopping/${'Eye and Ear Care'}`}><li className='hover:text-rose-900'>Eye and Ear Care</li></Link>
                    <Link to={`/shopping/${'Respiratory Health'}`}><li className='hover:text-rose-900'>Respiratory Health</li></Link>

                  </ul>
                </div>
              </nav>

            </div>
          )
        }

      </div>
      {/* header-end */}

    </>
  )
}

export default Categories