import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-secondary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Produse</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;


