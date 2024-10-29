import React, { useState } from "react";
import { LiaBicycleSolid } from "react-icons/lia";
import { IoMdWallet } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Store/Cart";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import "./styling.css";

const Confirmation = () => {
  const allCost = useSelector((state) => state.cart.totalCost);
  const carts = useSelector((state) => state.cart.items);
  const [theValue, setTheValue] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allCost);

  const clearOrder = () => {
    dispatch(clearCart());
    navigate("/drinks");
  };

  const move = () => {
    navigate("/itemcart");
  };

  const handleRadioChange = (e) => {
    setTheValue(e.target.value);
  };

  const payOnline = () => {
    if (theValue === "") {
      alert("Please select a payment method");
      return;
    }
    navigate("/itemcart/confirmation/payonline");
  };

  return (
    <>
      <div className="biggerDiv">
        <div className="theBigDiv">
          <div className="d-flex align-items-center">
            <TiArrowBack onClick={move} className="w-10 h-10 mr-6" />
            <h6 className="mb-0">Order Confirmation</h6>
          </div>
          <div className="shipping">
            <p className="pt-3">Shipping address</p>
            <p>
              Idi Ishin Jericho Reserve, alpha grace estate, ile titun, Ibadan
              South-west, Oyo State, Nigeria, 200272
            </p>
            <div className="riderNote">
              <div className="riderDiv">
                <span>
                  <LiaBicycleSolid />
                </span>
                <span>Note for the rider</span>
              </div>
              <div>
                <textarea
                  className="riderText"
                  name=""
                  id=""
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </div>
          <div className="paySum">
            <span className="fw-bold">Payment Summary</span>
            <div>
              <div>
                <span>Sub-total</span>
                <span>N{allCost}</span>
              </div>
              <div>
                <span>Delivery</span>
                <span>N1200</span>
              </div>
              <div>
                <span>Total</span>
                <span>{`N${allCost ===0? 0 : 1200 + allCost}`}</span>
              </div>
            </div>
            <div>
              <span>Payment Method</span>
              <form>
                <div className="theiconDiv">
                  <div>
                    <span>
                      <CiGlobe />
                    </span>
                    <label htmlFor="wallet">N500</label>
                  </div>
                  <div>
                    <input
                      value="wallet"
                      className="mb-0"
                      id="wallet"
                      name="selectPayment"
                      type="radio"
                      onChange={handleRadioChange}
                      checked={theValue === "wallet"}
                    />
                  </div>
                </div>
                <div className="theiconDiv">
                  <div className="">
                    <span>
                      <IoMdWallet />
                    </span>
                    <label htmlFor="payOnline">Pay online</label>
                  </div>
                  <div>
                    <input
                      value="payOnline"
                      className="mb-0"
                      id="payOnline"
                      name="selectPayment"
                      type="radio"
                      onChange={handleRadioChange}
                      checked={theValue === "payOnline"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="orderButtons">
            <button onClick={payOnline}>Place Order</button>
            <button onClick={clearOrder}>Clear orders</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
