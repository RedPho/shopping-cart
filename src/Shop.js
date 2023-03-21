import React from "react";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Item from "./components/Item";
import LightIcon from "./sun-svgrepo-com.svg";
import DarkIcon from "./moon-svgrepo-com.svg";
import { useState, useEffect } from "react";

function Shop() {
  const [viewCart, setViewCart] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(
    [{ name: "first", price: 5, quantity: 3, image: "" }, { name: "second", price: 8, quantity: 2, image: "" }]
  )

  function addItemToCart(item) {
    setItemsInCart([...itemsInCart, item]);
  }

  function removeItemFromCart(index) {
    let currentCart = [...itemsInCart];
    currentCart.splice(index, 1);
    setItemsInCart(currentCart);
  }

  function incrementItemQuantity(index) {
    let currentCart = [...itemsInCart];
    currentCart[index].quantity += 1;
    setItemsInCart(currentCart);
  }

  function decrementItemQuantity(index) {
    let currentCart = [...itemsInCart];
    let quantity = currentCart[index].quantity;
    if(quantity > 0) {
      currentCart[index].quantity -= 1;
      setItemsInCart(currentCart);
    }
  }

  useEffect(() => {
    let viewCartBtn = document.getElementById("viewCartBtn");
    let closeCartBtn = document.getElementById("closeCart");
    viewCartBtn.addEventListener("click", () => {
      setViewCart(true);
    })

    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", () => {
        setViewCart(false);
      })
    }
  })

  useEffect(() => {
    for (let i = 0; i < itemsInCart.length; i++) {
      let rmBtn = document.getElementById(`remove-${i}`);
      let incrementBtn = document.getElementById(`increment-${i}`);
      let decrementBtn = document.getElementById(`decrement-${i}`);
      if (rmBtn) {
        rmBtn.onclick = () => removeItemFromCart(i);
        incrementBtn.onclick = () => incrementItemQuantity(i);
        decrementBtn.onclick = () => decrementItemQuantity(i);
      }
    }
  })

  return (
    <div>
      <Navbar showItemsBtn={true} itemsInCart={itemsInCart} lightIcon={LightIcon} darkIcon={DarkIcon}></Navbar>
      {viewCart && <ShoppingCart itemsInCart={itemsInCart}></ShoppingCart>}
      
    </div>
  );
}

export default Shop;
