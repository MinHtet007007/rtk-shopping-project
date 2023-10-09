import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/services/cartSlice";

const Addtocart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  const clearCart = () => {
    cartItems.map((item) => {
      dispatch(removeFromCart(item));
    });
  };

  // console.log(totalAmount);
  if (cartItems.length === 0) {
    return (
      <div className=" flex items-center justify-center align-middle h-screen flex-col">
        <p className=" text-3xl text-red-500">Your Cart is empty!!!</p>
        <Link to={"/"}>
          <button className=" bg-violet-500 px-6 py-1 text-white rounded mt-5">
            Fill it
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className=" ">
        <div className=" max-h-[70vh] overflow-auto">
          {cartItems?.map((item) => {
            return <Cart key={item.id} {...item} />;
          })}
        </div>
        <hr className=" mt-3 w-[70%] mx-auto" />
        <div className=" flex justify-center items-center gap-3 mt-3">
          <p>
            Total: <span className=" font-bold">${totalAmount.toFixed(2)}</span>
          </p>
          <Link to={"/checkout"}>
          <button
            onClick={clearCart}
            className=" bg-red-500 text-white p-2 rounded"
          >
            Check Out
          </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Addtocart;
