import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./adminpage.css";

const Adminpage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Adminpage;
