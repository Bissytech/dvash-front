import React, { useState, useEffect } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { NavLink, Link,useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const location = useLocation();
const [isOpen, setIsOpen] = useState(false)
const [dropDown, setDropDown] = useState(false)
const [showIcons, setShowIcons] = useState(true)

useEffect(()=>{
const hiddenRoutes = ['/sign-up', '/log-in', '/admin/signup', '/admin/login' ]

if (hiddenRoutes.includes(location.pathname) ){
setShowIcons(false)
}else{
  setShowIcons(true)
}

}, [showIcons, location])


const toggleMenu = () =>{
  setIsOpen(true)
}
const toggleMenuSetup = ()=>{
 setDropDown(!dropDown)
}
const cancelContainer = ()=>{
  setIsOpen(false)
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
       <div className="imggDiv"><img src={require("../assets/Dvashimg.png")} alt="logo" /></div>   
         
     {showIcons &&  <div className={isOpen ? 'theHrefs display' : 'theHrefs'}>
             <div className="cancelIcon" onClick={cancelContainer}><FaTimes /></div>
          <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>

            { 
              <NavLink
                to="/drinks"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                DRINKS
              </NavLink>
            }

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
          </div>}    
         
          
          
          
      {showIcons && 
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
               LOG IN
             </Link>
           </p>
           <p>
             <Link className="theLink" to="/sign-up">
               SIGN UP
             </Link>
           </p>
           <p>
             <span
               className="theLink"
               onClick={logOut}
               style={{ cursor: "pointer" }}
             >
               LOG OUT
             </span>
           </p>
         </div>
       </div>
     </div>
      
      } 
        </div>
      </div>
    </header>
  );
};

export default Navbar;
