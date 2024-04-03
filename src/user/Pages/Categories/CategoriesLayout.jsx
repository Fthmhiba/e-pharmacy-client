import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { errorToast, successToast } from "../../../Components/toast";

function CategoriesLayout() {
  const { page } = useParams();
  // console.log(page);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/products/getprdcts-bycat/${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")} `,
          },
        }
      );
      console.log(response, "res");

      setProducts(response.data.products);
    } catch (error) {
      errorToast(error.message);
    }

    console.log(products, "products");
  };

  const handleAddToCart = async (e) => {
    try {
      console.log('api');
      const response = await axios.post('http://localhost:3001/api/cart/addToCart', { productId: e, userId: JSON.parse(localStorage.getItem("userData"))?._id });
      console.log(response);

      successToast("Succesfully Added into Cart")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p className=" hover:text-lime-500 p-2" >
        <Link to={"/"} >  <span className=''><i class="fa-solid fa-chevron-left text-xs text-center"></i> Home</span></Link>
      </p>
      {/* {page} */}
      <div className="flex flex-wrap justify-center">
        {products.map((item) => {
          return (
            <>
              <Card className="border w-[130px] sm:w-[250px] sm:h-[350px] m-5 hover:translate-x-1">
                <Link to={`/products/${item._id}`} state={item}>
                  <div className="h-[130px] sm:h-[240px]">
                    <img className="h-full w-full" src={item.mainImage} alt="Loading..." />
                  </div>
                  <div className="border p-2">
                    <p className="text-xs sm:text-xl font-bold">{item.name}</p>
                    <p className="text-xs sm:text-base">{item.price}</p>
                  </div>
                </Link>
                <div className="">
                  <button onClick={() => handleAddToCart(item._id)} className="bg-teal-900 text-white text-xs sm:text-base rounded w-full py-2">
                    Add to Cart <i class="fa-solid fa-bag-shopping"></i>
                  </button>
                </div>
              </Card>
            </>
          )
        })}
      </div>
    </>
  );
}

export default CategoriesLayout;