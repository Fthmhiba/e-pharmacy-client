import { useContext, useEffect, useState } from "react";
import { Card } from '@mui/material';
import axios from "axios";
import { Link } from "react-router-dom";
import { successToast } from "../../../Components/toast";
import { Context } from "../../../App";

function Usercart() {
  const { cart, refresh, setRefresh } = useContext(Context);
  const [coupon, setCoupon] = useState([]);
  const [coupnForChange, setCoupnForChange] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchCoupon = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/coupons', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      });
      setCoupon(response.data.Coupon);
      console.log(response,'coupon');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoupon();
  }, [refresh]);

  const handleCoupon = () => {
    const response = coupon.find((item) => item.code === coupnForChange);
    if (response) {
      const newTotal = totalAmount - response.offerRate;
      setTotalAmount(newTotal);
      setCoupnForChange('');
      console.log(`Coupon ${response.code} applied successfully. Discount: $${response.offerRate}`);
    } else {
      console.log("Invalid coupon code");
    }
  };

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((item) => {
      newTotalAmount += item.productInfo.price * item.quantity;
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const handleIncrementQuantity = async (id) => {
    try {
      await axios.post(`http://localhost:3002/api/cart/increment-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrementQuantity = async (id) => {
    try {
      await axios.get(`http://localhost:3002/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveQuantity = async (id) => {
    try {
      await axios.get(`http://localhost:3002/api/cart/remove-cart/${JSON.parse(localStorage.getItem("userData"))._id}/${id}`);
      setRefresh(!refresh);
      successToast("Removed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p className=" text-center p-2">
        <Link to={"/"}><span className='hover:text-lime-500'><i className="fa-solid fa-chevron-left text-xs text-center"></i> <i className="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>

      {cart?.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          <div className="bg-slate-100 m-4  border shadow p-5 rounded-lg lg:w-[1000px] md:w-[550px]">
            <div className="flex justify-between items-center">
              <p className='font-bold text-lg'>Shopping Cart</p>
              <p className='font-bold text-lg'>{cart.length} items</p>
            </div>
            <div className="lg:flex lg:p-2">
              <div className="m-3 flex flex-wrap">
                {cart.map((item) => (
                  <Card key={item.productInfo._id} className='w-[330px] m-2 p-2 hover:translate-x-1'>
                    <div className="flex sm:items-center">
                      <img src={item.productInfo.mainImage} alt="" className='w-[100px] m-1' />
                      <div className="mt-3 p-2">
                        <p>{item.productInfo.name}</p>
                        <div className="mt-3 flex justify-between p-3 gap-5">
                          <p className='font-bold text-xs sm:text-base'>${item.productInfo.price * item.quantity}</p>
                          <p className='border px-3 flex gap-3'>
                            <button className={`font-bold text-lg ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => handleDecrementQuantity(item.productInfo._id)}>-</button>
                            <button className='font-bold text-lg sm:text-base'>{item.quantity}</button>
                            <button onClick={() => handleIncrementQuantity(item.productInfo._id)}>+</button>
                          </p>
                        </div>
                        <button className='text-teal-800 text-lg text-center hover:translate-x-1' onClick={() => handleRemoveQuantity(item.productInfo._id)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="border-1 p-2 shadow right-4">
                <div className="text-left p-1">
                  <p className='font-bold text-lg'>Order Summary</p>
                </div>
                {cart.map((item) => (
                  <div className="flex justify-between items-center m-1 p-1" key={item.productInfo._id}>
                    <p>{item.productInfo.name}</p>
                    <p>${item.productInfo.price * item.quantity}.00</p>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between m-1 p-2">
                  <p>Delivery today with</p>
                  <span className="">$20.00</span>
                </div>
                <p className="fw-semibold p-1 m-1">Skinny Express</p>
                <p className="m-1 p-1">Deliver to <span className="fw-semibold">Jakarta, Indonesia</span></p>
                <hr />
                <div className="p-2 m-1">
                  <p className="flex justify-between m-1"><span>Amount</span> <span>${totalAmount + 20}.00 </span></p>
                  <p className="flex justify-between m-1"><span>Tax</span> <span>$30.00</span></p>
                </div>
                <hr />
                <div className="fw-semibold">
                  <p className="flex justify-between m-2"><span>Order Total</span> <span>{totalAmount + 30}.00</span></p>
                </div>
                <div className="text-center justify-center items-center flex">
                  <input className="w-44 rounded border m-2 p-2" type="text" onChange={(e) => setCoupnForChange(e.target.value)} placeholder="Have a coupon?" /> <span onClick={handleCoupon} className="absolute ms-[7.75rem] fw-semibold hover:text-pink-800 text-teal-800">Apply</span>
                </div>
                <div className="flex justify-center items-center">
                  <Link to={"/checkout"} state={{ totalAmount }}>
                    <button className=' bg-teal-800 text-white p-2 rounded w-80 m-4'>Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
}

export default Usercart;
