import React from "react";
import "./styling.css";
import { useSelector } from "react-redux";

const Cardpayment = () => {
  const allCost = useSelector((state) => state.cart.totalCost);
  return (
    <>
    <div className="generalDiv">
    <div className="oneDiv">
        <div className="twoDiv">
          <div className="one">
            <div>
              <img src="" alt="" />
              <h6>Dvash</h6>
            </div>
            <div>
              <span>bisoye.ogunnaike@gmail.com</span>
            </div>
          </div>

          <div className="two">
            <div>
              <span>Amount to pay: </span>
              <span>N{allCost ===0? 0 : 1200 + allCost}</span>
            </div>
          </div>
          <div className="three">
            <div>
              <span></span>
              <span>* Pay with Card</span>
            </div>
          </div>
          <div>
            <span className="fw-bold">Enter your card details</span>
            <div>
              <input placeholder="card number" type="text" />
            </div>
            <div>
              <input placeholder="expiry date" type="text" />
              <input placeholder="cvv" type="text" />
            </div>
          </div>

          <button className="continue">Continue</button>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Cardpayment;
