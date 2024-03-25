import React from 'react'
import { Link } from 'react-router-dom'

function Poster() {
    return (
        <div>
            {/* head part */}
            <nav>
                <div className="">
                    <ul className='flex flex-wrap gap-md-2  p-4  justify-content-center gap-lg-5   items-center  text-wrap text-sm text-teal-600  '>
                       <Link to={`/shopping/${'pain-Relief'}`}><li className='hover:text-rose-900'>Pain Relief</li></Link> 
                       <Link to={`/shopping/${'Cold and Flu'}`}><li className='hover:text-rose-900'>Cold and Flu</li></Link> 
                       <Link to={`/shopping/${'Diabetes Care'}`}><li className='hover:text-rose-900'>Diabetes Care</li></Link>
                       <Link to={`/shopping/${'Digestive Health'}`}><li className='hover:text-rose-900'>Digestive Health</li></Link>
                        <Link to={`/shopping/${'First Aid'}`}><li className='hover:text-rose-900'>First Aid</li></Link>
                        <Link to={`/shopping/${'Skin Care'}`}><li className='hover:text-rose-900'>Skin Care</li></Link>
                        <Link to={`/shopping/${'Child and Baby Care'}`}><li className='hover:text-rose-900'>Child and Baby Care</li></Link>
                        <Link to={`/shopping/${'Heart Health'}`}><li className='hover:text-rose-900'>Heart Health</li></Link>
                        <Link to={`/shopping/${'Eye and Ear Care'}`}><li className='hover:text-rose-900'>Eye and Ear Care</li></Link>
                        <Link to={`/shopping/${'Respiratory Health'}`}><li className='hover:text-rose-900'>Respiratory Health</li></Link>

                    </ul>
                </div>
            </nav>
            {/*---------end -----------*/}
{/* -------------------banner--------------------------- */}
            <section className="p-4">
                <div className='flex justify-center rounded align-items-center bg-slate-300     text-left'>
                    <div className="p-4">
                        <h1 className='text-xl fw-bold fs-3'>Your Prescription Affordable Health Solutions!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab veritatis amet laborum, et quos officia quaerat accusantium reiciendis? Facilis alias hic necessitatibus nemo perferendis ratione tenetur tempore soluta odit?</p>
                        <button className='text-neutral-300 p-2 bg-teal-600 fw-bold rounded m-3 '>Start Shopping <i class="fa-solid fa-basket-shopping"></i> </button>
                    </div>
                    <img src="https://images.pexels.com/photos/3850725/pexels-photo-3850725.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="300px" className='p-3 rounded ' alt="loading" />

                </div>
            </section>
{/* -------------------end--------------------------- */}
{/* ------------small options---------------------- */}
            <section>
                <div className="flex flex-wrap justify-evenly gap-md-0 items-center scroll-auto">
                    <div className=" bg-amber-200 rounded p-3  p-md-2   flex justify-center items-center flex-wrap ">
                        <i class="fa-solid fa-hand-holding-dollar pe-2 text-wrap "></i>
                        Get 25% OFF
                        <i class="fa-solid fa-angle-right ps-4"></i>
                    </div>
                    <div className="bg-orange-200 rounded p-3  p-md-2   flex justify-center items-center flex-wrap">
                        <i class="fa-solid fa-truck-ramp-box pe-2 text-wrap"></i>
                        Free Home Delivery
                        <i class="fa-solid fa-angle-right ps-4"></i>

                    </div>
                    <div className="bg-lime-200 rounded p-3 p-md-2   flex justify-center items-center flex-wrap ">
                        <i class="fa-solid fa-briefcase-medical pe-2 text-wrap"></i>
                        Doctor's Appointment
                        <i class="fa-solid fa-angle-right ps-4"></i>

                    </div>
                    <div className="bg-rose-200 rounded p-3  p-md-2  flex justify-center items-center flex-wrap">
                        <i class="fa-solid fa-stethoscope pe-2 text-wrap"></i>
                        Health Advice
                        <i class="fa-solid fa-angle-right ps-4"></i>

                    </div>
                </div>
            </section>
{/* --------------end-------------- */}
        </div>
    )
}

export default Poster