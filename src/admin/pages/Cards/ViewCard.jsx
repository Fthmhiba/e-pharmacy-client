import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast';

function ViewCard() {
  const [ card, setCard ] = useState([]);
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
            const response = await axios.get("http://localhost:3002/api/cards",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
            }})
            console.log(response,"res");
      
            setCard(response.data.Card)
          } catch (error) {
            errorToast(error.message);
          }
    }



    const handleDelete = async(id)=>{
      try {
        const response = await axios.delete(`http://localhost:3002/api/cards/${id}`,{headers:{
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
            <p className='text-base sm:text-lg'>{item.title}</p>
            <p className='text-xs sm:text-base'>{item.description}</p>
            <p className='text-xs sm:text-base'>{item.timeline}</p>
            <p className='text-xs sm:text-base'>{item.offerRate}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={`/admin/cards/edit-card/${item._id}`}><button  className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
            <button onClick={()=>handleDelete(item._id)} className='border border-teal-900 px-3 py-1 my-2 hover:bg-teal-900 hover:text-white text-xs sm:text-base'>Delete</button>
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

export default ViewCard