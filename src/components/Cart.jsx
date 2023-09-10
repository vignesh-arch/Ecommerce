import React, { useContext,useState,useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import CartComponent from './CartComponent';
import "../assets/styles/Cart.css"
import Summary from './Summary';

const Cart = () => {
  const {cartItems}=useContext(DataContext);
  const items= [...Object.values(cartItems)].map((item)=>{
     return <CartComponent key={item.id} product={item}/>
  });
  return (
    <div className='cart'>
        {items.length>0 && 
        <div className='items'>
          <h3>
              Shopping Cart({items.length} items)
          </h3>
          {items}
        </div>}
        <div className='summary-container'>
          <Summary/>
        </div>
    </div>
  )
}

export default Cart