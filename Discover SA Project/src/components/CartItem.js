import React, { useState } from "react";
import  "./CartItemStyles.css";

import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item}) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className="cartItem">
      <img
        className="cartItem_image"
        src={item.img}
        alt={item.title}
      />
      <div className="cartItem_details">
        <p className="details_title">{item.title}</p>
        <p className="details_price">R {item.price}</p>
        <div className="cartItem_qty">
          <label htmlFor="qty">Qty:</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="actions_deleteItemBtn"
        >
          <img
            src={require("../assets/images/trash-bin.png")}
            alt="delete"
          />
        </button>
      </div>
     
    </div>
  );
};


export default CartItem;
