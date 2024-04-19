import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { errorToast, successToast } from '../../../Components/toast';

function EditBlogs() {
    const [ date, setDate ] = useState('');
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setimage ] = useState('');



    const value = useLocation();
    const {id} = useParams();
    const navigate = useNavigate();


      const editBlog = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3002/api/blogs/${id}`,{image:image,date:date,title:name,description:description},
            {headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
            }})

            // setProduct(response.data.users)

            successToast("Blog Edited Succesfully")
            navigate('/admin/blogs')
          } catch (error) {
            errorToast(error.message);
          }
    }


    useEffect(()=>{
      setName(value.state.name)
      setDescription(value.state.description)
    },[])


  return (
    <>
    <div className="">
        <form action="" onSubmit={editBlog}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Blogs</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">

                <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                    <img src={image} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                  <FileBase64 onDone={ (res)=>setimage(res.base64)} />
                </div>

                <input type='date' placeholder='date' value={date} onChange={(e)=>setDate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='title' value={name} onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='descripion' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditBlogs