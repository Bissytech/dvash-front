import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, setvalue } from "../Store/Counterslice";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Details.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { addToCart } from "../Store/Cart";

const Detail = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.countslice);
  console.log(value);
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const carts = useSelector((state) => state.cart.items);
  console.log(carts);

  const handleAddToCart = (details, i) => {
    if (value > 0) {
      dispatch(
        addToCart({
          productId: details._id,
          quantity: parseInt(value),
          productname: details.productname,
          productprice: details.productprice,
          coverimage: details.coverimage,
        })
      );
    }
  };

  // const handleChange = (e) => {

  //     let valueinput = e.target.value

  //     if (valueinput > 35) {
  //         setQuantity(35)
  //     }else{setQuantity(valueinput)}

  // }

  useEffect(() => {
    axios
      .get(`http://localhost:5005/drinks/details/${id}`)
      .then((res) => {
        console.log(res.data.product);
        setDetails(res.data.product);
        dispatch(setvalue(1));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, dispatch]);

  return (
    <div>
      <Navbar />
      {details ? (
        <div className="detailsDiv">
          <div className="imgDiv">
            <img src={details.coverimage} alt="" />
          </div>
          <div className="detailsText">
            <div>
              <h2>{details.productname}</h2>
              <p>{details.productdescription}</p>
              <h4>N{details.productprice}</h4>
            </div>
            <hr />
            <p>BUY NOW</p>
            <p>35 in stock(can be backordered)</p>
            <div>
              <div className="quantityBar">
                <input
                  placeholder="Enter a num(max 35)"
                  value={value}
                  type="number"
                />
                <div className="buttonIcon">
                  <button onClick={() => dispatch(Increment())}>
                    <IoIosArrowUp />
                  </button>
                  <button onClick={() => dispatch(Decrement())}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              <div className="cartAdd">
                <button
                  onClick={() => {
                    handleAddToCart(details);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Detail;
