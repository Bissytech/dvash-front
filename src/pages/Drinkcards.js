import React, { useState } from "react";
import './Drinkcard.css'
import axios from "axios";
import {useNavigate } from "react-router-dom";
// import {useSelector} from 'react-redux'
// import { addToCart } from "../Store/Cart";

const Drinkcards = ({info,i, coverimage, productname,productprice,productId,addCart}) => {
 const navigate = useNavigate()
  
 const move = (id)=> {

  navigate(`/drinks/details/${id}`)
 }
  
  return (
    <div>
      <div  className="bigDiv">
        <div className="miniDiv">
          <div className="imagediv" onClick={()=>move(productId)}>
            <div className="moreInfo"><p>Click product image for further details about this product</p></div>
          <img src={coverimage} alt="" />
          </div>
      
      
          <div className="smallDiv">
         <em> <h5>{productname}</h5></em>  
            <div className="priceAndQuantity">
            
              <span>{productprice}</span>
              <button onClick={addCart}>Add to Cart</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinkcards;
