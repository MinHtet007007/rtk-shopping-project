import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/services/cartSlice";

const ItemDetail = () => {
  const { id } = useParams();
  // console.log(id)
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // console.log(product);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    const filteredData = data.find((item) => item.id == id);
    // console.log(data);
    setProduct(filteredData);
    setIsLoading(false);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return (
      <div className="">
        <Loading />
      </div>
    );
  }

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center h-[90vh] gap-10 mx-auto p-5">
      <img src={product.image} alt="" className=" max-w-[200px]" />
      <div className=" flex flex-col md:max-w-[50%] md:items-start items-center gap-3">
        <p className=" text-2xl font-bold ">{product.title}</p>
        <p className=" text-sm ">{product.description}</p>
        <p className=" font-bold">$ {product.price}</p>
        <button
          className="bg-violet-600 px-6 py-1 text-white rounded"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
