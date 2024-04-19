import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast';

function ViewBlogs() {
    const [Blogs, setBlogs] = useState([]);
    const [refresh, setRefresh] = useState(true);

    // const Blogs = [
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     },
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     },
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     }
    //   ]

    useEffect(() => {
        fetchAPI()
    }, [refresh])

    const fetchAPI = async (e) => {
        try {
            const response = await axios.get("http://localhost:3002/api/blogs", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
                }
            })
            console.log(response, "res");

            setBlogs(response.data.Blogs)
        } catch (error) {
            errorToast(error.message);
        }
    }


    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3002/api/blogs/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
                }
            })

            setRefresh(!refresh)
            successToast("Deleted Succesfully");
        } catch (error) {
            errorToast(error.message);
        }
    }

    return (
    <>
            <div className="flex flex-wrap justify-center">
                <table className="table   table-responsive-md    ">
                    <h4 className="text-center fw-bold text-lg m-3">Blog</h4>
                    <tr className="flex items-center gap-10 justify-between">
                        <th>Date</th>
                        <th>Heading</th>
                        <th>Description </th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                    <div className="">
                        {
                            Blogs.map((item) => {
                                const options = {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                    timeZone: 'Asia/Kolkata', // Specify Indian time zone here
                                };
                                return (
                                    <>

                                        <tr className="flex justify-between items-center g-5 ">
                                            <td>
                                                <p className=''>{new Date(item.date).toLocaleString(options)}</p>

                                            </td>
                                            <td>
                                                <p className='text-base m-3' style={{ wordBreak: "break-word" }}>{item.title}</p>

                                            </td>
                                            <td>

                                            </td>
                                            <td>{item.offerRate}</td>
                                            <td>
                                                <img src={item.image} alt="" className=' w-[100px] sm:w-[100px] sm:h-[100px]' />


                                            </td>
                                            <td>

                                                <Link to={`/admin/blogs/edit-blog/${item._id}`} state={item}><button className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Delete</button>

                                            </td>



                                        </tr >
                                    </>
                                )
                            })
                        }
                    </div>
                </table>

            </div>
        </>  
    )
}

export default ViewBlogs