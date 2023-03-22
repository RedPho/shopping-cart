import React from "react";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Item from "./components/Item";
import LightIcon from "./sun-svgrepo-com.svg";
import DarkIcon from "./moon-svgrepo-com.svg";
import { useState, useEffect } from "react";

let items = [{ name: "Donkey Man", image: "https://cdn.discordapp.com/attachments/995040935815696414/1078430329578213427/eWosMer_muhap_but_he_is_a_donkey-man_e2ae37de-4d62-4c89-b880-96b7c168e263.png", description: "Did you think a donkey can't be cool?", price: 499 },
{ name: "TFX", image: "https://cdn.discordapp.com/attachments/995040935815696414/1078701854097162290/eWosMer_TFX_0e43f5b3-42e7-4859-a5b7-30225482b342.png", description: "TFX, yes, not TTXE.", price: 999 },
{ name: "Triancow", image: "https://cdn.discordapp.com/attachments/995040935815696414/1079089300781678622/MuhapDeniz_a_cow_wearing_a_triangle_clock_753e8f86-942e-47c7-b10b-b6216fe6f99c.png", description: "A cow wearing a triangle clock.", price: 529 },
{ name: "Doom Theatre", image: "https://cdn.discordapp.com/attachments/1040290423396122705/1046354623025389588/emin_heavy_metal_painting_heavy_metal_style_theatral_757e9d4a-b2fa-47ea-97c4-acd43a76cdb0.png", description: "I would hang it on my wall.", price: 899 },
{ name: "A Giant Hole", image: "https://cdn.discordapp.com/attachments/995040935815696414/1073051637154844753/eWosMer_ilkers_giant_creepy_hole_65ca77d3-6a02-450f-a420-495d40b4bebd.png", description: "We don't know, but someone said it belongs to İlker.", price: 799 },
{ name: "An Ancient Supercomputer", image: "https://cdn.discordapp.com/attachments/1040290423396122705/1040303410529964132/emin_carbon_based_truth_integrated_ancient_supercomputer_daa9b038-24ec-4d68-86bf-ead6432104d7.png", description: "Carbon based truth integrated ancient supercomputer", price: 399 },
{ name: "Warm House", image: "https://cdn.discordapp.com/attachments/995040935815696414/1073048611350392882/emin_gotten_0cd76aea-4369-4853-9044-b6ef968ffaba.png", description: "It's actually priceless.", price: 9999 },
{ name: "Thor", image: "https://cdn.discordapp.com/attachments/995040935815696414/1079091016868581396/bleester_thor_wearing_a_pink_miniskirt_b8506052-eed8-4d6b-a72b-33fb87ebbef5.png", description: "Thor, a little different", price: 799 },
{ name: "Perfektenschlag", image: "https://cdn.discordapp.com/attachments/1040290423396122705/1083063290000834742/emin_perfektenschlag_f9091906-380a-4f4e-bbec-46be5a54e3bc.png", description: "Maybe perfect shot, ha?", price: 599 }
]

function Shop() {
  const [viewCart, setViewCart] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([])

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
    if (quantity > 1) {
      currentCart[index].quantity -= 1;
      setItemsInCart(currentCart);
    }
  }

  useEffect(() => {
    items.map((item, index) => {
      let buyBtn = document.getElementById("buyBtn-" + index);
      if (buyBtn) {
        buyBtn.onclick = function () {
          for (let i = 0; i < itemsInCart.length; i++) {
            if (itemsInCart[i].name == item.name) {
              incrementItemQuantity(i);
              return;
            }
          }
          let newItem = { name: item.name, price: item.price, quantity: 1, image: item.image };
          addItemToCart(newItem);
        }
      }
    })
  })

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
      <div className="flex flex-wrap justify-center mt-8 gap-5">
        {items.map((item, index) => {
          return <Item itemIndex={index} name={item.name} image={item.image} imageAlt={item.imageAlt} description={item.description} price={item.price}></Item>
        })}
      </div>
      <footer className="flex-row justify-center items-center bottom-0"><p className="text-center mt-6 mb-3">All arts made by Midjourney AI</p></footer>
    </div>
  );
}

export default Shop;
