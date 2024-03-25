import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function AdminLayout() {
  const [tokenState, setTokenState] = useState(Boolean(localStorage.getItem("admintoken")));


  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenState) {
      navigate('/admin-login')
    }
  }, [navigate, tokenState]);

  return (
    <>
      {
        tokenState ?
          <div>
            <div style={{ display: "flex" }}>
              <div className="w-full">
                  <Header/>
              </div>
            </div>
            <div className=" flex ">
              <SideBar />

              <div className="w-[60%] h-[100vh] rounded-xl m-auto bg-slate-200 ">
                <Outlet />
              </div>
            </div>

          </div>
          :

          navigate('/admin-login')

      }

    </>
  );
}

export default AdminLayout;
