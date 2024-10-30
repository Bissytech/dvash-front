import "./styling.css";
import { useSelector, useDispatch } from "react-redux";
import Cartcard from "../pages/Cartcard";
import { changeQuantity, thetotalcost } from "../Store/Cart";
import { Navigate, useNavigate } from "react-router-dom";

const Itemcart = () => {
  const carts = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const confirmpayment = () => {
    dispatch(
      thetotalcost({
        subtotal: accValue,
      })
    );
    navigate("/itemcart/confirmation");
  };
  const accValue = carts.reduce((acc, item) => {
    return (acc += item.quantity * item.productprice);
  }, 0);

  console.log(carts);
  const dispatch = useDispatch();

  const theIncrease = (data) => {
    if (data.quantity < 35) {
      dispatch(
        changeQuantity({
          productId: data.productId,
          updatedvalue: data.quantity + 1,
        })
      );
    }
  };

  const theDecrease = (data) => {
    dispatch(
      changeQuantity({
        productId: data.productId,
        updatedvalue: data.quantity - 1,
      })
    );
  };

  return (
    <div>
      <div className="allCartItem">
        <div className="bigCart">
          <h6>Shopcart List</h6>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>

            
              {carts.map((data, i) => {
                const mulValue = data.quantity * data.productprice;

                return (
                  <Cartcard
                  
                    key={data._id}
                    serialnum={i + 1}
                    coverimage={data.coverimage}
                    productname={data.productname}
                    Decrement={() => theDecrease(data)}
                    Increment={() => theIncrease(data)}
                    thevalue={data.quantity}
                    amount={`N${mulValue}`}
                  />
                );
              })}
            </tbody>

          </table>
          <span style={{display:`${carts.length > 0? 'none' : 'block'}`}}>Cart is currently empty</span>

          {/* Total value and Checkout button */}
        </div>
        <div className="accValue">
          <div>{`Total: N${accValue}`}</div>
          {carts.length > 0 ? (
            <button onClick={confirmpayment} className="checkout">
              Checkout
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Itemcart;
