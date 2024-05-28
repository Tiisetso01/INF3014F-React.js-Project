import React, { useState } from "react";
import  "./CartItemStyles.css";
import { useDispatch } from "react-redux";
import { adjustItemQtyWishList, removeFromWishList } from "../redux/WishList/wishlist-actions";

const WishlistItem = ({ item}) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQtyWishList(item.id, e.target.value));
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
          onClick={() => dispatch(removeFromWishList(item.id))}
          className="actions_deleteItemBtn"
        >
          <img
            src={require("../assets/images/trash-bin.png")}
            alt=""
          />
        </button>
      </div>
     
    </div>
  );
};


export default WishlistItem;
