import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../../Components/toast';

function AddCoupons() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('');
  const [code, setCode] = useState('');
  const [offerRate, setofferRate] = useState('')

  const navigate = useNavigate();


  const addCoupon = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/api/coupons", { title: title, description: description, timeline: timeline, offerRate: offerRate, code: code }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      
      // setAdd(response.data.users)
      successToast("Added Succesfully")
      navigate('/admin/coupons')
    } catch (error) {
      errorToast(error.message)
    }
  }

  return (
    <>
      <div className=" ">
        <form action="" onSubmit={addCoupon}>
          <p className='text-base fw-semibold   sm:text-lg mt-3 p-3 text-center'>Add Coupons</p>

          <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">


            <input type="text" placeholder='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" placeholder='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
            <input type="date" placeholder='timeline' name='time' value={timeline} onChange={(e) => setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" placeholder='code' name='code' value={code} onChange={(e) => setCode(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" placeholder='offerRate' name='offerRate' value={offerRate} onChange={(e) => setofferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="submit" value="Upload" className='text-teal-900 border-teal-900 border text-xs sm:text-base hover:bg-teal-900 hover:text-white' />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCoupons