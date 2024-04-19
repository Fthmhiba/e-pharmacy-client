import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import RenderRazorpay from './RenderRazorpay';
import { errorToast, successToast } from '../../../Components/toast';
import axios from "axios"
function Checkout() {

    const [orderDetails, setOrderDetails] = useState({
        orderId: null,
        currency: null,
        amount: null,
    });
    const [displayRazorpay, setDisplayRazorpay] = useState(false);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('');
    const [pincode, setPincode] = useState('');
    const [mode, setMode] = useState('');
    const { id } = useParams();
    const { state } = useLocation()



    const navigate = useNavigate();
    console.log(state,'state');

    const addAddress = async (e) => {
        e.preventDefault()
        try {
                
            const response = await axios.post("http://localhost:3002/api/order", { name, address, contact,total:state.totalAmount , city,state: stateName, pincode, mode: mode, userId: JSON.parse(localStorage.getItem("userData"))._id, productId: id }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem("usertoken")}`
                }
            })

            console.log(response, "order");

            setOrderDetails({
                orderId: response.order_id,
                currency: response.currency,
                amount: response.amount,
            });
            setDisplayRazorpay(true);


            successToast("Address Added Succesfully");
        } catch (error) {
            errorToast(error.message);
        }
    }


    return (
        <div className='m-5 h-screen text-teal-800'>
            <p className=" hover:text-lime-500 p-2" >
                <Link to={"/"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
            </p>
            <div className='border-1 rounded shadow  p-1 w-[400px] m-auto h-[520px]'>
                <h2 className='font-bold text-2xl text-center text-teal-700 p-3'>Address</h2>
                <div className=" ">

                </div>
                <form onSubmit={addAddress} className="p-2 text-gray-400 ">
                    <div className="p-2">
                        <p className=''>Contact Details </p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Full name' className='w-80 border-2 rounded ps-3 m-1 p-1 text-sm' />
                        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required placeholder='Mobile no.' className='w-80 border-2 rounded ps-3 m-1 p-1 text-sm' />

                    </div>
                    <div className="p-2">
                        <p>Address </p>
                        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required placeholder='Pincode' className='w-80 border-2 rounded ps-3 p-1 m-1 text-sm' />
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder='Address(House No. Building Street Area)' className='m-1 w-80 border-2 rounded ps-3 p-1 text-sm' />
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required placeholder='City/District' className='w-40 border-2 rounded ps-3 p-1 m-1 text-sm' />
                        <input type="text" value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder='State' className='w-40 border-2 rounded ps-3 p-1 m-1 text-sm' />

                    </div>

                    <select name="payment mode" onChange={(e) => setMode(e.target.value)} className="p-2 text-gray-400 border-2" id="">
                        <option value="">payment mode</option>
                        <option value="cash on delivery">Cash on delivery</option>
                        <option value="online">Online payment</option>

                    </select>
                    <button type="submit" className='bg-teal-800 text-white p-2 rounded w-80 m-4'>Continue</button>
                </form>
                <br />
                <hr />

            </div>
            {displayRazorpay && (
                <RenderRazorpay
                    amount={orderDetails.amount}
                    currency={orderDetails.currency}
                    orderId={orderDetails.orderId}
                    keyId='rzp_test_GlKNH5OXrlGGJy'
                    keySecret='paqoF5BDT4klqbU5YrLdHDAp'
                    serverBaseUrl={"http://localhost:3002"}
                />
            )}
        </div>
    )
}

export default Checkout
