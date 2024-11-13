import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./adminpage.css";
import { useNavigate } from "react-router-dom";

const Adminpage = () => {
  const navigate = useNavigate()
  const adminToken = localStorage.getItem('adminToken')
const adminLogin=()=>{
  navigate('/admin/login')
}


  return (
 <>
 {!adminToken? <div>You are not a verified admin. Kindly leave this page
  <button>Leave Page</button>
 </div> : 
    <div>
    <div className="adminNote">Hello Admin! For optimal functionality and a better experience, kindly visit your page on a laptop.
<button onClick={adminLogin}>Back to Login Page</button>

    </div>
    <div className="adminPage">
      <div className="sideBar">
        
        <ul>
          <li>
            <p>
              {" "}
              <Link className="dashLink" to={"./dashboard"}>
                Dashboard
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="dashLink" to={"./postproduct"}>
                Post Product
              </Link>
            </p>
          </li>
          <li>
            <p>
              {" "}
              <Link className="dashLink" to={"./manageproduct"}>
                Manage Product
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  </div>}
 </>
  );
};

export default Adminpage;
