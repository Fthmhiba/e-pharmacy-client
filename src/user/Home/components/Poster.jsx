import React from 'react'
import { Link } from 'react-router-dom'

function Poster() {
    return (
        <div>
{/* -------------------banner--------------------------- */}
            <section className="p-4 ">
                <div className='flex h-96 justify-center rounded align-items-center bg-slate-300  text-left' style={{backgroundImage:"url('https://images.pexels.com/photos/3850725/pexels-photo-3850725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
                    <div className="p-4">
                        <h1 className='text-xl fw-bold fs-3'>Your Prescription Affordable Health Solutions!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab veritatis amet laborum, <br /> et quos officia quaerat accusantium reiciendis? Facilis alias hic necessitatibus nemo perferendis ratione tenetur tempore soluta odit?</p>
                        <Link to={'/start-shopping'} >
                            <button className='text-neutral-300 p-2   bg-teal-800 fw-bold rounded m-3 '>Start Shopping <i class="fa-solid fa-basket-shopping"></i> </button>
                        
                        </Link>
                    </div>
                    {/* <img src="https://images.pexels.com/photos/3850725/pexels-photo-3850725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="300px" className='p-3 rounded sm:w-[300px]' alt="loading" /> */}

                </div>
            </section>
{/* -------------------end--------------------------- */}
{/* ------------small options---------------------- */}
            <section>
                <div className="grid sm:flex flex-wrap justify-evenly my-5" >
                <Link to={`/cards/${'off'}`}  >
                    <div className=" bg-rose-200  hover:bg-slate-300 flex gap-2 justify-around  text-base h-20 w-[200px] p-4 rounded-2xl items-center m-2 ">
                        <i class="fa-solid fa-hand-holding-dollar pe-2 text-2xl text-wrap "></i>
                        Get 25% OFF
                        <i class="fa-solid fa-angle-right ps-4"></i>
                    </div>
                    </Link>

                    <Link to={`/cards/${'delivery'}`}>
                    <div className="bg-lime-200  hover:bg-slate-300 flex gap-2 justify-around  text-base h-20 w-[200px] p-4 rounded-2xl items-center m-2 ">
                        <i class="fa-solid fa-truck-ramp-box pe-2 text-2xl text-wrap"></i>
                        Free Home Delivery
                        <i class="fa-solid fa-angle-right ps-4"></i>

                    </div>
                    </Link>
                    <Link to={`/cards/${'appointment'}`}>
                    <div className="bg-lime-200  hover:bg-slate-300 flex gap-2 justify-around  text-base h-20 w-[200px] p-4 rounded-2xl items-center m-2  ">
                        <i class="fa-solid fa-briefcase-medical pe-2 text-2xl text-wrap"></i>
                        Doctor's Appointment
                        <i class="fa-solid fa-angle-right ps-3"></i>

                    </div>
                    </Link>
                    <Link to={`/cards/${'advice'}`}>

                    <div className="bg-orange-200  hover:bg-slate-300 flex gap-2 justify-around  text-base h-20 w-[200px] p-4 rounded-2xl items-center m-2 ">
                        <i class="fa-solid fa-stethoscope pe-2 text-2xl text-wrap"></i>
                        Health Advice
                        <i class="fa-solid fa-angle-right ps-4"></i>

                    </div>
                    </Link>

                </div>
            </section>
{/* --------------end-------------- */}
        </div>
    )
}

export default Poster