import React, { useState, useEffect } from 'react';
import CartItem from '../component/Cart/CartItem';
import "../style/cartPage.style.css";
import OrderList from '../component/Cart/OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, calculateTotalPrice } from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log("cartItem",cartItem);

  useEffect(()=>{
    console.log(user);
    if(user){
      dispatch(getCart());
      console.log("cartItem",cartItem);
    }
  },[user]);

  useEffect(()=>{
    if (cartItem.length > 0) {
      dispatch(calculateTotalPrice());
    }
  },[cartItem]);

  return (
    <div className="cart-page-margin-bottom">
      <h2 className="cart-page-title">Cart</h2>
      <div className="cart-page-box">
        {!user || cartItem.length === 0 ? 
          <div className="empty-cart">장바구니가 비어 있습니다.</div>
        :
          <>
            <div className="cart-page-width margin-right">
                {cartItem.map((item, index)=>(
                  <CartItem key={item.ingredientId || index} ingredientId={item.ingredientId} qty={item.qty}/>
                ))}
            </div>
            <div className="cart-page-width">
              <OrderList totalPrice={totalPrice}/>
            </div>
          </>
        }
      </div> 
    </div>
  )
}

export default CartPage
