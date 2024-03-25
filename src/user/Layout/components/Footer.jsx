import React from 'react'

function Footer() {
    return (
        <div>
            <footer className='bg-teal-700 shadow-2xl text-slate-200 p-3 rounded'>
                <div className="flex justify-around items-center p-2 ">
                    <div className="">
                        <h2 className=' text-lg fw-semibold m-1 '>Contact</h2>
                        <p><i class="fa-solid fa-location-dot"></i> 123 Road, Dhaka, Bangladesh</p>
                        <p><i class="fa-solid fa-phone"></i> +098753321000</p>
                        <p><i class="fa-solid fa-envelope"></i> sajiburdemo121@gmail.com</p>
                    </div>
                    <div className="mt-9">
                        <h2 className='fw-semibold text-lg '>Quick Links</h2>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                    <div className="mt-9">
                        <h2 className='fw-semibold text-lg '>Specialties</h2>
                        <p>Anestheslology</p>
                        <p>Psychiatry</p>
                        <p>General surgery</p>
                        <p>Family medicine</p>
                        <p>Pediatrics</p>
                    </div>
                    <div className="mt-9">
                        <h2 className='fw-semibold text-lg '>Services</h2>
                        <p>Medical</p>
                        <p>Operation</p>
                        <p>Laboratory</p>
                        <p>ICU</p>
                        <p>Patient Ward</p>
                    </div>
                    <div className=" mb-10 ">
                        <h2 className='fw-semibold text-lg '>Social Media</h2>
                        <div className="flex justify-center items-center gap-2">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>

                        </div>
                    </div>
                </div>
                <hr />
                <div className=" flex justify-between text-xs ">
                    <p ><i class="fa-regular fa-copyright"></i> 2023 HEALTHY.All rights reserved.</p>
                    <div className="flex gap-10  items-center ">
                        <p>Terms and conditions</p>
                        <p>Privacy Policy </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
