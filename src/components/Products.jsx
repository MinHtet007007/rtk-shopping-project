import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setIsLoading(false);
  };
  if (isLoading) {
    return (
      <div className="">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className=" flex flex-wrap justify-center gap-5 mt-20">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    );
  }
};

export default Products;
