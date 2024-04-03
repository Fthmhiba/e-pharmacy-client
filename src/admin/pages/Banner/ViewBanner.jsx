import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../../Components/toast";

function ViewBanner() {
  const [Banner, setBanner] = useState([]);
  const [Banner2, setBanner2] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchData();
    fetchApi()
  }, [refresh]);

  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3001/api/banner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
        },
      });
      console.log(response, "res");

      setBanner(response.data.Banner);
    } catch (error) {
      errorToast(error.message);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/banner/${id}`, {
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

  const fetchApi = async (e) => {
    try {
      const response = await axios.get("http://localhost:3001/api/banner2", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
        },
      });
      console.log(response, "res");

      setBanner2(response.data.Banner);
    } catch (error) {
      errorToast(error.message);
    }
  };


  const handle2Delete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/banner2/${id}`, {
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
          <h4 className="text-center fw-bold text-lg">Banner1</h4>
          <tr className="flex items-center gap-10 justify-between">

            <th>percentage</th>
            <th>Title</th>
            <th>Description </th>
            <th>Rate</th>
            <th>Offer Rate</th>
            <th>image</th>
            <th>Action</th>
          </tr>
<div className="">
          {
            Banner.map((item) => {
              return (
                <>

                  <tr className="flex justify-between items-center g-5 ">
                    <td>{item.percentage}%OFF</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.rate}</td>
                    <td>{item.offerRate}</td>
                    <td>
                      <img src={item.image} alt="loading.." className="w-[200px] sm:w-[50px]" />

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
      <div className="flex   bg-teal-50  hover:bg-purple-50 m-3 rounded-3xl p-6 sm:p-10 sm:items-center items-center justify-center">
        <table className="table   table-responsive-md    ">
        <h4 className="text-center fw-bold text-lg">Banner2</h4>
          <tr className="flex items-center gap-10 justify-between">

            <th>percentage</th>
            <th>Title</th>
            <th>Description </th>
            <th>Rate</th>
            <th>Offer Rate</th>
            <th>image</th>
            <th>Action</th>
          </tr>
<div className="">
          {
            Banner2.map((item) => {
              return (
                <>

                  <tr className="flex justify-between items-center g-5 ">
                    <td>{item.percentage}%OFF</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.rate}</td>
                    <td>{item.offerRate}</td>
                    <td>
                      <img src={item.image} alt="loading.." className="w-[200px] sm:w-[50px]" />

                    </td>
                    <td>
                      <button onClick={() => handle2Delete(item._id)} className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Delete</button>

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
  );
}

export default ViewBanner;

