import React, { useState, useEffect } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
const [dropDown, setDropDown] = useState(false)
const toggleMenu = () =>{
  setIsOpen(!isOpen)
}
const toggleMenuSetup = ()=>{
 setDropDown(!dropDown)
}

  const [totalquantity, setTotalquantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logOut = () => {
    setTimeout(() => {
      if (token) {
        localStorage.removeItem("token");
        navigate("/log-in");
      }
    }, 3000);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalquantity(total);
  }, [carts]);

  return (
    <header>
      <div className="navContainer">
        <div className="navBar">
          <img src={require("../assets/Dvashimg.png")} alt="logo" />
          <div className={isOpen ? 'theHrefs display' : 'theHrefs'}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>

            {token && (
              <NavLink
                to="/drinks"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                DRINKS
              </NavLink>
            )}

            <NavLink
              to="/parfait"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PARFAIT
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACT US
            </NavLink>
            
          </div>
          <div className="theIcons">
            {/* not to get confused */}
            <div onClick={toggleMenu} className="faBarsIcon">
              <FaBars
                style={{ display: "none" }}
                className="position-relative faBars"
                size={30}
              />

              {/* check here */}

             

              {/* check here */}
            </div>
            {/* not to get confused */}

            <div className="position-relative shopCart">
              <NavLink to="/itemcart/">
                <PiShoppingCartSimpleFill className="shopCart" size={30} />
              </NavLink>
              <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                {totalquantity}
              </span>
            </div>
            <div className="faUser">
              <FaUser onClick={toggleMenuSetup} className="position-relative shopCart" size={30} />
              <div className={dropDown ? 'accountSetup display' : 'accountSetup'}>
                <p>
                  <Link className="theLink" to="/log-in">
                    Log in
                  </Link>
                </p>
                <p>
                  <Link className="theLink" to="/sign-up">
                    Sign up
                  </Link>
                </p>
                <p>
                  <span
                    className="theLink"
                    onClick={logOut}
                    style={{ cursor: "pointer" }}
                  >
                    Log out
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
