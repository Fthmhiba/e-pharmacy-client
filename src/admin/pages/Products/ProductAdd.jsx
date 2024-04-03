import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../../Components/toast';

function ProductAdd() {
  const [categories, setCategories] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [image, setImage] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [delivery, setDelivery] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [refresh, setRefresh] = useState(false);



  const navigate = useNavigate();


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (e) => {
    try {
      const response = await axios.get("http://localhost:3001/api/categories", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("admintoken")} `
        }
      })
      console.log(response, "res");

      setCategories(response.data.Category)
    } catch (error) {
      errorToast(error.message)
    }
  }



  const addProduct = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/api/products", {mainImage:mainImage,image:image,name:name,price:price,details:details,delivery:delivery,dropdown},
      {headers:{
        'Authorization':`Bearer ${localStorage.getItem("admintoken")} `
      }})
      console.log(response, "gggg");
      setRefresh(!refresh)

      // setProduct(response.data.users)

      successToast("Products Added Succesfully")
      navigate('/admin/products')
    } catch (error) {
      errorToast(error.message);
    }
  }



  return (
    <>
      <div className="">
        <form action="" onSubmit={addProduct} className='m-auto w-[260px] sm:w-[450px] p-5 rounded-2xl border border-teal-900 shadow-md shadow-teal-900'>
          <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Products</p>


          <p className='font-thin text-teal-900'>Set Main Image</p>
          <div className="flex justify-center items-center sm:ml-0 ml-2 ">
            <img src={mainImage} alt="loading..." className='bg-slate-100 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
            <FileBase64 onDone={(res) => setMainImage(res.base64)} />
          </div>


          <p className='font-thin text-teal-900'>Add Images</p>
          <div className="flex gap-2">
            {
              image.map((items) => {
                return (
                  <>
                    <img className='w-12 h-12 rounded-full' src={items.image} alt="Loading..." />
                  </>
                )
              })
            }
            <FileBase64 onDone={(res) => setImage([...image, { image: res.base64 }])} />
          </div>

          <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">

            <select className='bg-teal-50' name="" id="" onChange={(e) => setDropdown(e.target.value)}>
              <option className=''>---Select---</option>
              {
                categories && categories.map((item) => {
                  return (
                    <>
                      <option key={item._id} value={item._id}>{item.name}</option>
                    </>
                  )
                })
              }
            </select>

            <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
            <input type="text" value={details} placeholder='details' onChange={(e) => setDetails(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
            <input type="text" value={delivery} placeholder='delivery cost' onChange={(e) => setDelivery(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
            <input type="submit" value="Upload" className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white' />
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductAdd;