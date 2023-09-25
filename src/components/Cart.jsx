import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemQuantity, removeFromCart, subtractItemQuantity } from "../features/services/cartSlice";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Cart = (props) => {
  const { id, title, price, image, quantity } = props;
  const dispatch = useDispatch();


  const oneItemPrice = () => {
    return price * quantity;
  }
  return (
    <div className=" flex justify-around mt-5 items-center select-none">
      <div className=" flex gap-5 items-center">
        <img src={image} className=" max-w-[100px] h-[100px]" alt="" />
        <div className="">
          <h2 className=" text-xl">{title.substring(0, 25)}</h2>
          <p>${oneItemPrice()}</p>
          <p
            className=" cursor-pointer select-none text-red-500"
            onClick={() => dispatch(removeFromCart(props))}
          >
            remove
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <p className="" onClick={() => dispatch(addItemQuantity(props))}>
          <IoIosArrowUp />
        </p>
        <p className=" ">{quantity}</p>
        <p
          className=""
          onClick={() => quantity > 1 && dispatch(subtractItemQuantity(props))}
        >
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
