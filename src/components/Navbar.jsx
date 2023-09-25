import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.addToCart);
  // console.log(cartItems);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setIsLoading(false);
  };
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  // console.log(filteredProducts);
  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { filteredProducts } });
    // console.log(filteredProducts);
  };
  return (
    <div className=" flex justify-around p-5 shadow-lg">
      <Link to={"/"}>
        <h2 className=" text-3xl text-violet-600">Shop</h2>
      </Link>
      <div className=" flex gap-5">
        <form onSubmit={searchHandler}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            placeholder="Search"
          />
        </form>
        <Link to={"/addtocart"}>
          <div className="relative">
            <BsFillHandbagFill className=" text-3xl text-violet-600" />
            <Badge color="violet" className=" absolute bottom-6 left-4">
              {cartItems.length}
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
