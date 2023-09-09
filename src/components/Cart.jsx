import React, { useContext,useState,useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import CartComponent from './CartComponent';
import "../assets/styles/Cart.css"

const Cart = () => {
  const {cartItems}=useContext(DataContext);
  const item= [...cartItems.items].map((item)=>{
       return <CartComponent key={item.id} product={item}/>
  });
  return (
    <div className='cart'>
        <div>
          <div>
            {item}
          </div>
          <div className='summary'>
          
          </div>
        </div>
    </div>
  )
}

export default Cart