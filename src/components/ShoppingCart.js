import React, { useEffect, useState } from "react";

export default function ShoppingCart() {

  const [itemsInCart, setItemsInCart] = useState([]);
  useEffect(()=> {
    setItemsInCart([{ name: "first item", quantity: "3", image: "" }, { name: "second item", quantity: "2", image: "" }])
  })


  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Item</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {itemsInCart.map((item) =>
          (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">item description</div>
                  </div>
                </div>
              </td>
              <td>{item.quantity}</td>
              <th>
                <button className="btn btn-error btn-xs">remove</button>
              </th>
            </tr>
          )
          )};

        </tbody>
      </table>
    </div>
  )
}