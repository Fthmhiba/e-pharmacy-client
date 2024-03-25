
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './user/Layout/Layout'
import Home from './user/Home/Home'
import Shopping from './user/Home/components/Shopping'
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



function App() {
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
          element: <Shopping/>
        },
        {
          path: "wishlist",
          // element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "order",
          // element: <Orders/>
        },
        {
          path: "payment",
          // element: <Payment/>
        },

      ],
      
    },
    
    // admin's---------------------------------------


    {
      path: "/admin",
      element: <AdminLayout/>,
      children: [
        {
          path:"",
          element: <AdminHome/>
        },
        {
          path:"profile",
          element: <AdminProfile/>,
          children: [
            {
              path: "update",
              element: <UpdateProfile/>
            }
          ]
        },
        // {
        //   path: "banner",
        //   element: <BannerLayout/>,
        //   children: [
        //     {
        //       path: "",
        //       element: <BannerPreview/>
        //     },
       
        //   ]
        // },
        {
          path: "users",
          element: <UserManagement/>
        },
        {
          path: "orders",
          element: <Order/>,
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
          element: <Products/>,
          children: [
            {
              path: "",
              element: <ProductView/>
            },
            {
              path: "edit-product/:id",
              element: <ProductEdit/>
            },
            {
              path: "add-product",
              element: <ProductAdd/>
            }
          ]
        },
        {
          path: "categories",
          element: <Categories/>,
          children: [
            {
              path: "",
              // element:<ViewCategories/>
            },
            {
              path:"edit-category/:id",
              // element : <EditCategories/>
            },
            {
              path:"add-category",
              // element : <AddCategories/>
            }
          ]
        },
        {
          path: "offer-cards",
          element: <OfferCards/>,
          children: [
            {
              path: "",
              // element:<ViewCards/>
            },
            {
              path:"edit-cards/:id",
              // element : <EditCards/>
            },
            {
              path:"add-cards",
              // element : <AddCards/>
            }
          ]
        },
        {
          path: "blogs",
          element: <Blogs/>,
          children: [
            {
              path: "",
              // element: <ViewBlogs/>
            },
            {
              path:"edit-blog/:id",
              // element : <EditBlogs/>
            },
            {
              path:"add-blog",
              // element : <AddBlogs/>
            }
          ]
        }

      ]
    },


    {
      path: "/user-signup",
      element: <Signup/>
    },
    {
      path: "/user-login",
      element: <Login/>
    },

    {
      path:"/admin-signup",
      element: <AdminSignup/>
    },
    {
      path: "/admin-login",
      element: <AdminLogin/>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
