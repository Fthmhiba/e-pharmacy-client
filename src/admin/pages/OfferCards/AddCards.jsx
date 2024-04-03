import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { errorToast, successToast } from '../../../Components/toast';

function AddCards() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [timeline,setTimeline] = useState('');
    const [offerRate,setOfferRate] = useState('');
    const [image,setImage] = useState('');


    const navigate = useNavigate();


      const addCards = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/offercards",{image:image,title:title,description:description,timeline:timeline,offerRate:offerRate},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})
            
            // setAdd(response.data.users)
            successToast("Added Succesfully")
            navigate('/admin/offer-cards')
        } catch (error) {
            errorToast(error.message)
        }
      }

  return (
    <>
    <div className=" ">
        <form action="" onSubmit={addCards}>
            <p className='text-base fw-semibold   sm:text-lg mt-3 p-3 text-center'>Add Cards</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                        <img src={image} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                  <FileBase64 onDone={ (res)=>setImage(res.base64)} />
                </div>

                <input type="text" placeholder='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='timeline' name='name' value={timeline} onChange={(e)=>setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='offer rate' name='name' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="submit" value="Upload"  className='text-teal-900 border-teal-900 border text-xs sm:text-base hover:bg-teal-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddCards