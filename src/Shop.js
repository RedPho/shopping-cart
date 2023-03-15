import React from "react";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function Shop() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Shop</h1>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}

export default Shop;
