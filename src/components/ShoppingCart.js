import React, { useEffect, useState } from "react";

export default function ShoppingCart({ itemsInCart }) {

  return (
    <div className="overflow-x-auto sticky">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
            <th className="flex flex-row-reverse"><button id="closeCart" className="btn btn-error btn-xs">X</button></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {itemsInCart.map((item, index) =>
          (
            <tr key={index}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.price}$</div>
                  </div>
                </div>
              </td>
              <td><button id={`decrement-${index}`}>-</button> {item.quantity} <button id={`increment-${index}`}>+</button></td>
              <td>{item.quantity*item.price}$</td>
              <th>
                <button id={`remove-${index}`} className="btn btn-error btn-xs">remove</button>
              </th>
            </tr>
          )
          )}
        </tbody>
      </table>
      <div className="alert flex-row justify-center">Total: {itemsInCart.reduce((oldValue, item) => { return oldValue + item.price * item.quantity; }, 0)}$ <button className="btn btn-primary btn-sm">Checkout</button></div>
    </div>
  )
}