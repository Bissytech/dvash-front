import React, { useState } from "react";

import "./Details.css";
import { useSelector } from "react-redux";
const Cartcard = ({ serialnum, coverimage, productname, Decrement, Increment, thevalue, amount }) => {
  return (
    <tr>
      <td>{serialnum}</td>
      <td>
        <img src={coverimage} alt={productname} width="50" />
      </td>
      <td>{productname}</td>
      <td>
        <div className="semiDivv">
          <button onClick={Decrement}>-</button>
          <span>{thevalue}</span>
          <button onClick={Increment}>+</button>
        </div>
      </td>
      <td>{amount}</td>
    </tr>
  );
};

export default Cartcard;



