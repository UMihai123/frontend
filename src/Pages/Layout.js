import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"

const Layout = () => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const nav = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user")
    if(userFromLocalStorage){
      setUser(jwt_decode(userFromLocalStorage))
      setIsLoggedIn(true)
      setUserRole(jwt_decode(userFromLocalStorage).role)
    }
  }, [location]);

  function handleLogin(){
    if (isLoggedIn){
      localStorage.removeItem("user")
      setIsLoggedIn(false)
      setUser(null)
    }
    else{
      nav("/login")
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark">'
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            {
              userRole === "Admin" || userRole === "Colaborator" ?
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/addProduct">Add product</Link>
                </li>
                :
                <div></div>
            }
          </ul>
          <div className="float:right text-white navbar-nav align-middle" style={{cursor: "pointer"}} onClick={handleLogin}>
            {
              isLoggedIn ? 
                  <div>
                    <p style={{display: "inline-block", marginRight: "10px", lineHeight: "1.5px"}}> Hello {user ? user.unique_name : ""}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                  </div>
                :
                <div>
                  <svg style={{lineHeight: "1.5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
                </div>
            }
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
