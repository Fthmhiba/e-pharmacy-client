import React, { createContext, useEffect } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './user/Layout/Layout'
import Home from './user/Home/Home'
import Signup from './user/Register/Signup'
import Login from './user/Login/Login'
// import Wishlist from './user/Wishlist/Wishlist'
import Cart from './user/Pages/Cart/Usercart'
import Profile from './user/Profile/Profile'

import AdminSignup from './admin/Register/AdminSignup'
import AdminLogin from './admin/Login/AdminLogin'
import AdminLayout from './admin/Layout/AdminLayout'
import Products from './admin/pages/Products/Products'
import ProductAdd from './admin/pages/Products/ProductAdd'
import AdminHome from './admin/Home/AdminHome'
import ProductEdit from './admin/pages/Products/ProductEdit'
import OfferCards from './admin/pages/OfferCards/OfferCard'
import Categories from './admin/pages/Categories/Categories'
import Blogs from './admin/pages/Blogs/Blogs'
import Order from './admin/pages/Orders/Order'
import AdminProfile from './admin/pages/Profile/AdminProfile'
import UserManagement from './admin/pages/User/UserManagement'
import ProductView from './admin/pages/Products/ProductView'
import UpdateProfile from './admin/pages/Profile/UpdateProfile'
import EditCategory from './admin/pages/Categories/EditCategory'
import ViewCategory from './admin/pages/Categories/ViewCategory'
import AddCategory from './admin/pages/Categories/AddCategory'
import ViewCards from './admin/pages/OfferCards/ViewCards'
import EditCards from './admin/pages/OfferCards/EditCards'
import AddCards from './admin/pages/OfferCards/AddCards'
import ViewBanner from './admin/pages/Banner/ViewBanner'
import AddBanner from './admin/pages/Banner/AddBanner'
import Banner from './admin/pages/Banner/Banner'
import AddBanner2 from './admin/pages/Banner/AddBanner2'
import Card from './admin/pages/Cards/Card'

import CategoriesLayout from './user/Pages/Categories/CategoriesLayout'
import StartShopping from './user/Pages/Shopping/StartShopping'
import Cards from './user/Pages/Cards/Cards'
import ViewAll from './user/Pages/ViewAll/ViewAll'
import Payment from './user/Pages/Payment/Payment'
import ProductDetails from './user/Pages/Products/ProductDetails'
import { useState } from 'react'
import Checkout from './user/Pages/Orders/Checkout'
import Orders from './user/Pages/Orders/Orders'
import axios from 'axios'
import Wishlist from './user/Pages/Wishlist/Wishlist'
import ViewCard from './admin/pages/Cards/ViewCard'
import EditCard from './admin/pages/Cards/EditCard'
import AddCard from './admin/pages/Cards/AddCard'
import ViewCoupons from './admin/pages/Coupons/ViewCoupons'
import EditCoupons from './admin/pages/Coupons/EditCoupons'
import AddCoupons from './admin/pages/Coupons/AddCoupons'
import Coupons from './admin/pages/Coupons/Coupons'
import Coupon from './user/Pages/Coupons/Coupon'
import AddBlog from './admin/pages/Blogs/AddBlog'
import ViewBlog from './admin/pages/Blogs/ViewBlog'


export const Context = React.createContext()



function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [refresh, setRefresh] = useState(true)




  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "shopping/:page",
          element: <CategoriesLayout />
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "coupons",
          element: <Coupon />,
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "products/:prdctdetails",
          element: <ProductDetails />
        },
        {
          path: "order",
          element: <Orders />
        },
        {
          path: "cards/:cards",
          element: <Cards />
        },
        {
          path: "payment",
          element: <Payment />
        },
        {
          path: "checkout",
          element: <Checkout />
        },
        {
          path: "view-all",
          element: <ViewAll />
        },
        {
          path: "start-shopping",
          element: <StartShopping />
        }

      ],

    },

    // admin's---------------------------------------


    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <AdminHome />
        },
        {
          path: "profile",
          element: <AdminProfile />,
          children: [
            {
              path: "update",
              element: <UpdateProfile />
            }
          ]
        },
        {
          path: "banners",
          element: <Banner />,
          children: [
            {
              path: "",
              element: <ViewBanner />
            },
            {
              path: "add-banner1",
              element: <AddBanner />
            },
            {
              path: "add-banner2",
              element: <AddBanner2 />
            },

          ]
        },
        {
          path: "users",
          element: <UserManagement />
        },
        {
          path: "orders",
          element: <Order />,
          children: [
            {
              path: "",
              // element: <OrderManagement/>
            },
            {
              path: "all",
              // element: <OrderManagement/>
            },
            {
              path: "new",
              // element: <New/>
            },
            {
              path: "Processing",
              // element: <Processing/>
            },
            {
              path: "shipped",
              // element: <Shipped/>
            },
            {
              path: "cancelled",
              // element: <Cancelled/>
            },
            {
              path: "search",
              // element: <OrderSearch/>
            }
          ]
        },
        {
          path: "single-orders",
          // element: <SingleOrders/>
        },
        {
          path: "products",
          element: <Products />,
          children: [
            {
              path: "",
              element: <ProductView />
            },
            {
              path: "edit-product/:id",
              element: <ProductEdit />
            },
            {
              path: "add-product",
              element: <ProductAdd />
            }
          ]
        },
        {
          path: "categories",
          element: <Categories />,
          children: [
            {
              path: "",
              element: <ViewCategory />
            },
            {
              path: "edit-category/:id",
              element: <EditCategory />
            },
            {
              path: "add-category",
              element: <AddCategory />
            }
          ]
        },
        {
          path: "offer-cards",
          element: <OfferCards />,
          children: [
            {
              path: "",
              element: <ViewCards />
            },
            {
              path: "edit-cards/:id",
              element: <EditCards />
            },
            {
              path: "add-cards",
              element: <AddCards />
            }
          ]
        },
        {
          path: "cards",
          element: <Card />,
          children: [
            {
              path: "",
              element: <ViewCard/>
            },
            {
              path: "edit-cards/:id",
              element: <EditCard/>
            },
            {
              path: "add-cards",
              element: <AddCard />
            }
          ]
        },
        {
          path: "coupons",
          element: <Coupons />,
          children: [
            {
              path: "",
              element: <ViewCoupons/>
            },
            {
              path: "edit-coupons/:id",
              element: <EditCoupons/>
            },
            {
              path: "add-coupon",
              element: <AddCoupons />
            }
          ]
        },

        {
          path: "blogs",
          element: <Blogs />,
          children: [
            {
              path: "",
              element: <ViewBlog/>
            },
            {
              path: "edit-blog/:id",
              // element : <EditBlog/>
            },
            {
              path: "add-blog",
              element : <AddBlog/>
            }
          ]
        }

      ]
    },


    {
      path: "/user-signup",
      element: <Signup />
    },
    {
      path: "/user-login",
      element: <Login />
    },

    {
      path: "/admin-signup",
      element: <AdminSignup />
    },
    {
      path: "/admin-login",
      element: <AdminLogin />
    },

  ])

  const fetchdata = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/cart/viewall')
        setCart(response.data.result)
    } catch (error) {
      console.log(error);
    }
}

useEffect(() => {
  fetchdata()
}, [refresh])

  
  return (
    <>
      <Context.Provider value={{ count, setCount, cart, setCart, wishlist, setWishlist, refresh, setRefresh }}>
        <RouterProvider router={router} />

      </Context.Provider>
    </>
  )
}

export default App
