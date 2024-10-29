import React, {useState} from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { TbTransferIn } from "react-icons/tb";
import { AiFillBank } from "react-icons/ai";
import { RiSmartphoneLine } from "react-icons/ri";
import { ImQrcode } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "./styling.css";

const Payonline = () => {
  const navigate = useNavigate();
const [payOption, setpayOption] = useState('')
const [displayDiv, setDisplayDiv] = useState(false)

  const payWithCard = () => {
    setDisplayDiv(true)
    
    if (payOption === '') {
        return
    }else{
        navigate("/itemcart/confirmation/payonline/cardpayment");
    }
   
  };

  const clickPaymentMethod = (e) =>{
setpayOption(e.target.value)


  }
  return (
    <>
      <div className="firstHandDiv">
        <div className="secondDiv">
          <h6>Pay online</h6>

          <div>
            <p>How would you pay?</p>
            <div className="payOn">
              <div>
                <span>
                  <FaRegCreditCard />
                </span>
                <span>Card</span>
              </div>
              <div>
                <input value='Card' checked={payOption === 'Card'} onChange={clickPaymentMethod} name="payment" type="radio" />
              </div>
            </div>
            <div className="payOn">
              <div>
                <span>
                  <TbTransferIn />
                </span>
                <span>Bank Transfer</span>
              </div>
              <div>
                <input value='Bank Transfer' checked={payOption === 'Bank Transfer'} onChange={clickPaymentMethod} name="payment" type="radio" />
              </div>
            </div>
            <div className="payOn">
              <div>
                <span>
                  <AiFillBank />
                </span>
                <span>Bank</span>
              </div>
              <div>
                <input value='Bank' checked={payOption === 'Bank'} onChange={clickPaymentMethod} name="payment" type="radio" />
              </div>
            </div>
            <div className="payOn">
              <div>
                <span>
                  <RiSmartphoneLine />
                </span>
                <span>USSD</span>
              </div>
              <div>
                <input value='USSD'checked={payOption === 'USSD'} onChange={clickPaymentMethod} name="payment" type="radio" />
              </div>
            </div>
            <div className="payOn">
              <div>
                <span>
                  <ImQrcode />
                </span>
                <span>QR Code</span>
              </div>
              <div>
                <input value='QR Code' checked={payOption === 'QR Code'} onChange={clickPaymentMethod} name="payment" type="radio" />
              </div>
            </div>
          </div>
        
         { displayDiv=== true &&   payOption === '' ? <p className="text-danger">Pls select a payment option</p> : ''  }
      
          
            <button onClick={payWithCard} className="">Make Payment</button>
         
          
          
        </div>
      </div>
    </>
  );
};

export default Payonline;
