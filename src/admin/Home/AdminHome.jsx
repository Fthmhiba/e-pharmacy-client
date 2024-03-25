import React from 'react'

function AdminHome() {
  return (
    <>
      <h4 className="text-center text-lg m-6 fw-bold text-teal-800">Home</h4>

    <div className="flex gap-5 flex-wrap mt-8 sm:mt-10  justify-center">
        <button className='text-xs sm:text-base p-5  border-teal-900 hover:bg-teal-900 hover:text-white rounded-lg'>
            <p>ORDERS</p>
            <p>No. of Orders</p>
        </button>
        <button className='text-xs sm:text-base p-5 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-lg'>
            <p>USERS</p>
            <p>No. of Users</p>
        </button>
    </div>
   
    </>
  )
}

export default AdminHome