import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">CART</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black font-bold rounded-lg text-white m-2 p-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h1>Cart is Empty. Please Add Items to the cart !!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
