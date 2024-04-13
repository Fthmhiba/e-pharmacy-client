import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from "../../../Components/toast";
import axios from 'axios';


function ViewBlog() {
    const [Blog, setBlog] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const fetchData = async (e) => {
        try {
            const response = await axios.get("http://localhost:3002/api/blogs", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
                },
            });
            console.log(response, "res");

            setBlog(response.data.Blogs);
        } catch (error) {
            errorToast(error.message);
        }
    };


    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3002/api/blog/${id}`, {
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
            <div className="flex   bg-teal-50  hover:bg-purple-50 m-3 rounded-3xl p-6 sm:p-10 sm:items-center items-center justify-center">
                <table className="table   table-responsive-md    ">
                    <h4 className="text-center fw-bold text-lg">Blogs</h4>
                    <tr className="flex items-center gap-10 justify-between">

                        <th>Title</th>
                        <th>Description </th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                    <div className="">
                        {
                            Blog?.map((item,index) => {
                                return (
                                    <>

                                        <tr className="flex justify-between items-center g-5 ">
                                            <td>{item?.title}</td>
                                            <td>{item?.description}</td>
                                            <td>
                                                <img src={item?.image} alt="loading.." className="w-[200px] sm:w-[50px]" />

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

export default ViewBlog
