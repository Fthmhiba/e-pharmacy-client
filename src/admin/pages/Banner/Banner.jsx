import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Banner() {
  return (
    <div>
      <h4 className="text-center text-lg m-6 fw-bold text-teal-800">Banners</h4>

<div className="flex gap-5 m-3 mt-5  justify-evenly  border-teal-900">
    <Link to={'/admin/banners/add-banner1'}><button className='border-1 rounded border-teal-900 px-3 py-3 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Add Banner1</button></Link>
    <Link to={'/admin/banners/add-banner2'}><button className='border-1 rounded border-teal-900 px-3 py-3 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Add Banner2</button></Link>

    <Link to={'/admin/banners/'}><button  className='border-1 rounded border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>View</button></Link>
</div>
<div className="flex justify-center items-center">

<Outlet/>
</div>
    </div>
  )
}

export default Banner
