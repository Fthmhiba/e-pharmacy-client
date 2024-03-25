import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div>
      <h4 className="text-center text-lg m-6 fw-bold text-teal-800">Blogs</h4>

<div className="flex gap-5 m-3 mt-5 border-2 justify-center border-teal-900">
    <Link to={'/admin/blogs/add-blog'}><button className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Add</button></Link>
    <Link to={'/admin/blogs/'}><button  className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>View</button></Link>
</div>
<Outlet/>
    </div>
  )
}

export default Blogs
