import React from "react";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import { useState, useEffect } from "react";

function Shop() {
  const [viewCart, setViewCart] = useState(false);


  const testArray = [{ name: "first", description: "first item!" ,quantity: "3", image: "" }, { name: "second", quantity: "2", image: "" }];
  useEffect(()=> {
    let viewCartBtn = document.getElementById("viewCartBtn");
    viewCartBtn.addEventListener("click", ()=> {
      setViewCart(true);
    })

    let closeCartBtn = document.getElementById("closeCart");
    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", ()=> {
        setViewCart(false);
      })
    }
    
  })

  return (
    <div>
      <Navbar showItemsBtn={true} itemsInCart={testArray}></Navbar>
      {viewCart && <ShoppingCart itemsInCart={testArray}></ShoppingCart>}
    </div>
  );
}

export default Shop;
