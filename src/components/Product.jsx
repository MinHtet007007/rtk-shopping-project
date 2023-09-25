import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/services/cartSlice";

const Product = (props) => {
  const { id, title, price, image, description } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(props));
  };
  return (
    <div className="  flex flex-col w-72 p-7 shadow-lg">
      <img src={image} className=" max-w-[130px] h-[200px]" alt="" />
      <div className=" mt-3 flex flex-col gap-3">
        <h2>{title.substring(0, 25)}...</h2>
        <p>${price}</p>
        <button
          className="bg-violet-600 px-6 py-1 text-white"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
