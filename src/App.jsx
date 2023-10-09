import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Addtocart from "./components/Addtocart";
import Search from "./components/Search";
import RouteGuard from "./components/RouteGuard";
import ItemDetail from "./components/ItemDetail";
import CheckOut from "./components/CheckOut";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
        <Route path="/Detail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
};

export default App;
