import React, { useState, useEffect } from "react";
import "./styling.css";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Cardpayment = () => {
  const allCost = useSelector((state) => state.cart.totalCost);
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState(null);
  const [cardNum, setCardNum] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.user.email;
        setEmail(userEmail);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, [token]);

  const finalPayment = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://dvashdrinks-back.onrender.com/payonline/cardpayment",
     {
      cardNum,
      expiryDate,
      cvv
  })
      .then((res)=>{
console.log(res);
toast.success(res.data.message);

      })
      .catch((err)=>{
        console.log(err);
        toast.error(err?.response?.data?.message)
        
      });

      setTimeout(() => {
        setCardNum('');
        setCvv('');
        setExpiryDate('');
      }, 4000);
  };

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
                <span>{email}</span>
              </div>
            </div>

            <div className="two">
              <div>
                <span>Amount to pay: </span>
                <span>N{allCost === 0 ? 0 : 1200 + allCost}</span>
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
                <input
                  value={cardNum}
                  onInput={(e) => setCardNum(e.target.value)}
                  placeholder="card number"
                  type="number"
                />
              </div>
              <div>
                <input
                  value={expiryDate}
                  onInput={(e) => setExpiryDate(e.target.value)}
                  placeholder="expiry date"
                  type="number"
                />
                <input
                  value={cvv}
                  onInput={(e) => setCvv(e.target.value)}
                  placeholder="cvv"
                  type="number"
                />
              </div>
            </div>

            <button onClick={finalPayment} type="button" className="continue">
              Continue
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardpayment;
