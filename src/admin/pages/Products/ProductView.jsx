import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function ProductView() {

  const [products, setProduct] = useState([]);
  const [refresh, setRefresh] = useState(true);

    // const products = [
    //     {
    //       main_image:img,
    //       img1:img,
    //       img2:img,
    //       img3:img,
    //       img4:img,
    //       name:"",
    //       price: "",
    //       details:"",
    //       delivery:""
    //     },
    //     {
    //       main_image:img,
    //       img1:img,
    //       img2:img,
    //       img3:img,
    //       img4:img,
    //       name:"",
    //       price: "",
    //       details:"",
    //       delivery:""
    //     }
    //   ]



    
    // useEffect(()=>{
    //   fetchAPI()
    // },[refresh])

   
    //   const fetchAPI = async(e) =>{
    //     try {
    //         const response = await axios.get("http://localhost:3000/api/products",{headers:{
    //           'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
    //         }})
    //         console.log(response,"res");
      
    //         setProduct(response.data.products)
    //       } catch (error) {

    //         // catchnte ulli products null aakki kodthaal delete aakkmbo last product remove aayi poovm..illenki refresh mele cheyynm
    //         setProduct([])
    //         errorToast(error.message)
    //       }
    // }

    // console.log(products,'---');


    // const handleDelete = async(id)=>{
    //   try {
    //     const response = await axios.delete(`http://localhost:3000/api/products/${id}`,{headers:{
    //           'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
    //         }})

    //         setRefresh(!refresh)
    //     successToast("Deleted Succesfully");
    //   } catch (error) {
    //     errorToast(error.message);
    //   }
    // }




  return (
    <>
    <div className="flex flex-wrap justify-center items-center">
      {
        products.map((item, index)=>{
          return(
            <>
            <div className="bg-slate-100 m-3">
            <div key={index} className="m-5">


            <div className="flex justify-center">
              <img src={item.mainImage} alt="" className=' w-[200px] sm:w-[280px] sm:h-[250px]' />
            </div>

            <div className="flex mt-3 gap-1 justify-center">
              {
                item.image.map((item)=>{
                  return(
                    <>
                    <img src={item.image}  className='bg-slate-300 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' alt="Loading..." />
                    </>
                  )
                })
              }
              </div>
            </div>

            <div className="m-5">

              <div className="mt-3">
                <p className='text-xs sm:text-base'>category :{item.categoriesInfo.name}</p>
                <p className='text-xs sm:text-base'>name :{item.name}</p>
                <p className='text-xs sm:text-base'>price : {item.price}</p>
                <p className='text-xs sm:text-base'>Details : {item.details}</p>
                <p className='text-xs sm:text-base'>Delivery charge : {item.delivery}</p>
              </div>

            </div>

            <div className="flex justify-center gap-3">
                <Link to={`/admin/products/edit-product/${item._id}`} state={item}><button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Edit</button></Link>
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

export default ProductView