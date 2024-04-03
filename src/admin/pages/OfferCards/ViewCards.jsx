import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast';

function ViewCards() {
  const [ Offercard, setOffercard ] = useState([]);
  const [refresh, setRefresh] = useState(true);

    // const Cards = [
    //     {
    //       offer_title: "Card 1",
    //       offer_description: "description about it......"
    //     },
    //     {
    //       offer_title: "Card 2",
    //       offer_description: "description about it......"
    //     },
    //     {
    //       offer_title: "Card 3",
    //       offer_description: "description about it......"
    //     }
    //   ]


      useEffect(()=>{
        fetchData()
      },[refresh])

      const fetchData = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3001/api/offercards",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})
            console.log(response,"res");
      
            setOffercard(response.data.Offercard)
          } catch (error) {
            errorToast(error.message);
          }
    }



    const handleDelete = async(id)=>{
      try {
        const response = await axios.delete(`http://localhost:3001/api/offercards/${id}`,{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})

            setRefresh(!refresh)
        successToast("Deleted Succesfully");
      } catch (error) {
        errorToast(error.message);
      }
    }
    

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        Offercard.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between items-center m-5 p-5 w-[150px] sm:w-[350px] h-[150px] sm:h-[500px] border border-slate-400 shadow-md shadow-slate-600 rounded-lg">


          <div className="">
              <img src={item.image} alt="" className=' w-[200px] sm:w-[180px] sm:h-[180px]' />
            </div>

          <div className="">
            <p className='text-base sm:text-lg'>{item.title}</p>
            <p className='text-xs sm:text-base'>{item.description}</p>
            <p className='text-xs sm:text-base'>{item.timeline}</p>
            <p className='text-xs sm:text-base'>{item.offerRate}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={`/admin/offer-cards/edit-cards/${item._id}`}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
            <button onClick={()=>handleDelete(item._id)} className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Delete</button>
          </div>
         
          </div>
          </>
          )
        })
      }
    </div>
    </>
  )
}

export default ViewCards