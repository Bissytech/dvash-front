import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Drinkcards from "./Drinkcards";
import "./Drinkcard.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Store/Cart";
import Footers from "../components/Footers";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
const Drinks = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [productLoading, setProductLoading] = useState(true)
  const [data, setData] = useState([]);
  const [showAdded, setShowAdded] = useState(false)
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  const carts = useSelector((state) => state.cart.items);
  console.log(carts);
  const handleAddToCart = (info, i) => {
    console.log(info.coverimage);
    dispatch(
      addToCart({
        productId: info._id,
        quantity: 1,
        productprice: info.productprice,
        productname: info.productname,
        coverimage: info.coverimage,
      })
    );

    setShowAdded(true)
setTimeout(() => {
  setShowAdded(false);
}, 3000); 
  };

  const navigate = useNavigate();

  useEffect(() => {
 
    if (token) {
      axios
        .get("https://dvashdrinks-back.onrender.com/admin/getproduct/drinks")
        .then((res) => {
          console.log(res.data.products);
          setData(res.data.products);
          setProductLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);


  const loginRoute = () => {
    localStorage.removeItem('token')
    navigate("/log-in");
  };

  return (
    <div className="position-relative">
    <Navbar />
    <div className="drinkDiv">
      <div className="headone">
        <h1>Dvash drinks are readily available just for you...</h1>
        <em>
          <span style={{ display: 'none' }}>
            Click product image for further details about this product
          </span>
        </em>
      </div>
  
      <div
        style={{ display: `${showAdded ? 'block' : 'none'}` }}
        className="cartTicked"
      >
        <span className="text-success">
          <IoMdCheckmarkCircle />
        </span>
        <span>Added to Cart</span>
      </div>
  
      {!token ? (
        <div className="alertMessage">
          <p>
            Hello!!! It seems you are yet to log in to our website. Kindly log in
            to enjoy exclusive discounts on your purchase.
          </p>
          <button onClick={loginRoute}>Log in</button>
        </div>
      ) : productLoading ? (
        <Loader/>
      ) : (
        <div className="drinkPage">
          {data.map((info, i) => (
            <Drinkcards
              key={i} 
              productId={info._id}
              coverimage={info.coverimage}
              productname={info.productname}
              productprice={info.productprice.toLocaleString()}
              addCart={() => handleAddToCart(info)}
            />
          ))}
        </div>
      )}
  
      <Footers />
    </div>
  </div>
  
  );
};

export default Drinks;
