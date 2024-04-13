import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../../Components/toast';

function ViewCards() {
  const [Offercard, setOffercard] = useState([]);
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


  useEffect(() => {
    fetchData()
  }, [refresh])

  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3002/api/offercards", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      console.log(response, "res");

      setOffercard(response.data.Offercard)
    } catch (error) {
      errorToast(error.message);
    }
  }



  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3002/api/offercards/${id}`, {
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
      <div className="flex flex-wrap justify-center">
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Discription</th>
            <th>Timeline</th>
            <th>Action</th>
          </tr>
          <tr>

            {
              Offercard.map((item) => {
                return (
                  <>


                    <td>
                      <img src={item.image} alt="" className=' w-[200px] sm:w-[180px] sm:h-[180px]' />

                    </td>
                    <td> {item.title}</td>
                    <td> {item.description}</td>
                    <td> {item.timeline}</td>
                    <td> {item.offerRate}</td>
                    <td>
                      <Link to={`/admin/offer-cards/edit-cards/${item._id}`}><button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>

                    </td>
                    <td>
                      <button onClick={() => handleDelete(item._id)} className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Delete</button>

                    </td>



                  </>
                )
              })
            }

          </tr>
        </table>
      </div>
    </>
  )
}

export default ViewCards