
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Blog() {
    const [ blogs,setBlogs ] = useState([]);


    useEffect(()=>{
        fetchAPI()
      },[])
    
    
      const fetchAPI = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3001/api/blogs",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})
            console.log(response,"res");
      
            setBlogs(response.data.Blog)
          } catch (error) {
            errorToast(error.message)
          }
    }


    const title_blog = 'In this section, we delve into various aspects of health ';
   

  return (
    <>
    <p className='text-2xl sm:text-4xl font-medium text-center mt-10'>Our Latest News & Blogs</p>
    <div className="flex flex-wrap justify-center m-2">


    {/* left */}
        <div className="bg-red-50 px-10 py-2 rounded-lg flex flex-col items-center justify-center sm:w-[700px]">
            <div className="">
                <img src={blogs[0].image} alt="" width="300px" />
            </div>
            <div className="mt-8">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-teal-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                    <p className='sm:text-base text-xs'>{blogs[0]?.description}</p>
                    <Link to={'readmore'}>
                        <button className='bg-teal-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    {/* left end */}


    {/* right */}

    <div className="">
        {/* right-1 */}
        { blogs?.map((item,index)=>{
            // if(index!==0){
                if(index==1){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-gray-100 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-teal-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'readmore'}>
                                    <button className='bg-teal-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }
        {/* right-2 */}

        { blogs?.map((item,index)=>{
            // if(index!==0){
                if(index==2){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-pink-50 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-teal-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'readmore'}>
                                    <button className='bg-teal-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }
       
        {/* right-3 */}
        { blogs?.map((item,index)=>{
            // if(index!==0){
                if(index==3){
                return(
                    <>
                    <div className="flex sm:flex-row flex-col items-center bg-red-50 rounded-xl m-2 p-5 gap-1 sm:w-[500px]">
                        <div className="">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-teal-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>{item.date}</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog  }</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                                <Link to={'read4more'}>
                                    <button className='bg-teal-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }

    </div>

    {/* right end */}


    </div>
    </>
  )
}

export default Blog
