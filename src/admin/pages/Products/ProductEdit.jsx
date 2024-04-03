import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { errorToast, successToast } from '../../../Components/toast';

function ProductEdit() {
  const [mainImage,setMainImage] = useState("");
  const [image,setImage] = useState([]);
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [details,setDetails] = useState('');
  const [delivery,setDelivery] = useState('');
  const [categories,setCategories] = useState([]);
  const [ dropdown,setDropdown ] = useState('');

  const {id} = useParams();
  const navigate = useNavigate();

  const value = useLocation();
  console.log("value: ",value.state);



  const editProduct = async(e) =>{
    e.preventDefault()
    try {
        const response = await axios.put(`http://localhost:3001/api/products/${id}`,{mainImage:mainImage,image:image,name:name,price:price,details:details,delivery:delivery,dropdown},
        {
          headers:{
          'Authorization':`Bearer ${localStorage.getItem("admintoken")}`
          }
        })
  
        // setEdit(response.data.users)
        console.log(response,"response");

        navigate('/admin/products');
        successToast("Edited Succesfully");
      } catch (error) {
        errorToast(error.message);
      }
}


// edit aakmbo avde already illa details displey cheyyaan vndi aan uselocation use cheythe..
// ith kittaan view page l state  item pass cheythkn...
// OR
// allenki input kodkna avde valuente ullil name maatteett value.state.name kodthaalm mathi
  useEffect(()=>{
    setName(value.state.name)
    setPrice(value.state.price)
    setDetails(value.state.details)
    setDelivery(value.state.delivery)
    setCategories(value.state.categories)
    
    fetchData()
  },[])



  const fetchData = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3001/api/categories",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
        }})
        console.log(response,"res");
  
        setCategories(response.data.Category)
      } catch (error) {
        errorToast(error.message)
      }
}


return (
    <>
    <div className="">
        <form action="" onSubmit={editProduct} className='m-auto w-[260px] sm:w-[450px] p-5 rounded-2xl border border-teal-900 shadow-md shadow-teal-900'>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Products</p>
            <div className="justify-center items-center sm:ml-0 ml-2 ">

            <p className='font-thin text-teal-900'>Set a Main Image</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                    <img src={mainImage} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
              <FileBase64 onDone={ (res)=>setMainImage(res.base64)} />
            </div>


          <p className='font-thin text-pink-900'>Add Images</p>
            <div className="flex gap-2">
              {
                image.map((items)=>{
                  return(
                    <>
                    <img className='w-12 h-12 rounded-full' src={items.image} alt="Loading..." />
                    </>
                  )
                })
              }
              <FileBase64 onDone={ (res)=>setImage([...image,{image:res.base64}]) } />
            </div>

            </div>

            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">

            <select name="" id="" onChange={(e)=> setDropdown(e.target.value) }>
              { 
                categories && categories.map((item)=>{
                return(
                  <>
                  <option>Select</option>
                  <option key={item._id} value={item._id}>{item.name}</option>
                  </>
                )
              })
            }
            </select>

                <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}  className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='details' value={details} onChange={(e)=>setDetails(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='delivery cost' value={delivery} onChange={(e)=>setDelivery(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default ProductEdit