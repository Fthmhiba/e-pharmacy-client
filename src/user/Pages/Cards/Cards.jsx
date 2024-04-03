import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function Cards() {
  const { cards } = useParams()
  const { state } = useLocation();

  const item = state;
  return (
    <>
      {/* {cards} */}

      <p className=" hover:text-lime-500 p-2" >
        <Link to={"/"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>
      <h2 className='text-center text-lg fw-semibold '>Dr's Appoinment</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="m-5">
          <img src={item?.mainImage} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
          <div className="flex">
            {
              item?.image?.map((image) =>
                <img src={image?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />)
            }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Cards