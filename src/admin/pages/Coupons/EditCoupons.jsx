import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { errorToast, successToast } from '../../../Components/toast';


function EditCoupons() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('');
  const [code, setCode] = useState('');
  const [offerRate, setofferRate] = useState('')

  const { id } = useParams();
  const navigate = useNavigate();

  const value = useLocation();

  const EditCoupons = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:3002/api/coupons/${id}`, { title: title, description: description, timeline: timeline, offerRate: offerRate, code: code},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("admintoken")}`
          }
        })

      // setProduct(response.data.users)

      successToast("Cards Edited Succesfully")
      navigate('/admin/coupons')
    } catch (error) {
      errorToast(error.message);
    }
  }

  useEffect(()=>{
    setTitle(value.state.title)
    setTimeline(value.state.timeline)
    setDescription(value.state.description)
    setCode(value.state.code)
    setofferRate(value.state.offerRate)
    
  },[])

  return (
    <>
      <div className="">
        <form action="" onSubmit={EditCoupons}>
          <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Cards</p>

          <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">


            <input type="text" placeholder='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
            <input type="text" placeholder='descripion' name='descripion' value={description} onChange={(e) => setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
            <input type="date" placeholder='timeline' name='timeline' value={timeline} onChange={(e) => setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" placeholder='code' name='name' value={code} onChange={(e) => setCode(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" placeholder='offerRate' name='name' value={offerRate} onChange={(e) => setofferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            
            <input type="submit" value="submit" className='text-teal-900 border-teal-900 border text-xs sm:text-base hover:bg-teal-900 hover:text-white' />
          </div>
        </form>
      </div>
    </>
  )
}

export default EditCoupons