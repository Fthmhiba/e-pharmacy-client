import React from 'react'
import { useParams } from 'react-router-dom'

function Shopping() {
    const {page} = useParams()
  return (
    <div className='text-center p-5 bg-slate-200'>
        {/* page = explore path */}
        {page}
    </div>
  )
}

export default Shopping
