import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.addToCart);
    // console.log(totalAmount);
  if (cartItems.length === 0) {
      return <div className=" flex items-center justify-center align-middle h-screen flex-col">
          <p className=" text-3xl text-red-500">Your Cart is empty!!!</p>
          <Link to={'/'}>
          <button className=" bg-violet-500 px-6 py-1 text-white rounded mt-5">Fill it</button>
          </Link>
    </div>;
  } else {
    return (
      <div className="">
        <div>
          {cartItems?.map((item) => {
            return <Cart key={item.id} {...item} />;
          })}
        </div>
        <hr className=" mt-3 w-[70%] mx-auto" />
        <div className=" flex justify-around mt-3">
          <p>Total</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    );
  }
};

export default Addtocart;
