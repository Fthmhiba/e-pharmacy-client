import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import FileBase64 from 'react-file-base64';
import { errorToast, successToast } from '../../../Components/toast';

function AddBanner() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [percentage,setPercentage] = useState('');
    const [rate,setRate] = useState('');
    const [offerRate,setOfferRate] = useState('');
    const [image,setimage] = useState('');



    const navigate = useNavigate();


    const addBanner = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:3001/api/banner`,{image:image,name:title,description:description,percentage:percentage,rate:rate,offerRate:offerRate},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})
            
            navigate('/admin/banners')
            successToast("Products Added Succesfully");
          } catch (error) {
            errorToast(error.message);
          }
    }


  return (
    <>
    <div className="mb-10">
        <form action="" onSubmit={addBanner}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Banner 1</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <div className="flex flex-col gap-3">

                    <div className="flex flex-col justify-center items-center sm:ml-0 ml-2 ">
                      <img src={image} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                      <FileBase64 onDone={ (res)=>setimage(res.base64)} />  
                    </div>
                    <input type="text" placeholder='heading' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                    <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='offer percentage' name='offer' value={percentage} onChange={(e)=>setPercentage(e.target.value)}className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='rate' name='rate' value={rate} onChange={(e)=>setRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='offer_rate' name='offer_rate' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                </div>
                  <input type="submit" value="Upload"  className='text-teal-900 border-teal-900 border text-xs sm:text-base hover:bg-teal-900 hover:text-white'/> 
            </div>
        </form>

        
        
    </div>
    </>
  )
}

export default AddBanner