import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { errorToast, successToast } from "../../../Components/toast";

function UserOrders() {
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/order/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
          },
        }
      );
      console.log(response, "res");

      setCategory(response.data.data);
    } catch (error) {
      errorToast(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3002/api/categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
          },
        }
      );

      setRefresh(!refresh);
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.message);
    }
  };


  const ApproveOrder = async (id) => {
    try {
      await axios.post(`http://localhost:3002/api/order/approved/${id}`)
      successToast("Approved");
      setRefresh(!refresh);
    } catch (error) {
      errorToast("error", error)
    }
  };


  const PendingOrder = async (id) => {
    try {
      await axios.post(`http://localhost:3002/api/order/pending/${id}`)
      successToast("order pending...");
      setRefresh(!refresh);
    } catch (error) {
      errorToast("error", error)
    }
  };

  const ShippedOrder = async (id) => {
    try {
      await axios.post(`http://localhost:3002/api/order/shipped/${id}`)
      successToast("shipped");
      setRefresh(!refresh);
    } catch (error) {
      errorToast("error", error)
    }
  };

  const DeliveredOrder = async (id) => {
    try {
      await axios.post(`http://localhost:3002/api/order/delivered/${id}`)
      successToast("delivered");
      setRefresh(!refresh);
    } catch (error) {
      errorToast("error", error)
    }
  };


  return (
    <>
      <div className="flex flex-wrap justify-center">
        {category.map((item) => {
          return (
            <>
              <div className="flex flex-col justify-between items-center m-5 p-5 w-[150px] sm:w-[250px] border border-pink-900 shadow-md shadow-pink-900 rounded-lg">
                <div className="">
                  <p className="text-base sm:text-lg text-teal-900 text-center">
                    {item?.productInformation?.name}
                  </p>
                  <p className="text-xs sm:text-base">
                    {item?.productInformation?.details}
                  </p>
                  <span className="text-teal-900">Mode of payment:</span>
                  <span className="text-xs sm:text-base font-semibold text-center underline">
                    {item?.productInformation?.mode}
                  </span>
                  {/* <p>
                    <span className="text-teal-900">Status :</span>
                    <span className="text-xs sm:text-base">
                      {item?.paymentInfo?.status}
                    </span>
                  </p> */}
                </div>

                <div className="mt-3 flex border-t-2 border-teal-900 flex-wrap gap-1 justify-center">
                  <button
                    type="button"
                    onClick={() => PendingOrder(item._id)}
                    className="border border-teal-900 px-2 rounded-lg mt-2"
                  >
                    Pending
                  </button>
                  <button
                    type="button"
                    onClick={() => ApproveOrder(item._id)}
                    className="border border-teal-900 px-2 rounded-lg mt-2"
                  >
                    Approved
                  </button>
                  <button
                    type="button"
                    onClick={() => ShippedOrder(item._id)}
                    className="border border-teal-900 px-2 rounded-lg mt-2"
                  >
                    shipped
                  </button>
                  <button
                    type="button"
                    onClick={() => DeliveredOrder(item._id)}
                    className="border border-teal-900 px-2 rounded-lg mt-2"
                  >
                    delivered
                  </button>
                </div>

                {/* <div className=" flex gap-3">
            <Link to={`/admin/categories/edit-category/${item?.productInformation?._id}`} state={item.productInformation}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
            <button onClick={()=>handleDelete(item?.productInformation?._id)} className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Delete</button>
          </div> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default UserOrders;