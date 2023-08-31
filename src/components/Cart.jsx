import React, { useContext,useState,useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import CartComponent from './CartComponent';
import "../assets/styles/Cart.css"

const Cart = () => {
  const {cartItems}=useContext(DataContext);
  const [item,setItem]=useState([...cartItems.items].map((item)=>{
    return <CartComponent key={item.id} product={item}/>
  }));
  useEffect(()=>{
    setItem([...cartItems.items].map((item)=>{
      return <CartComponent key={item.id} product={item}/>
    }));
  },[cartItems])
  return (
    <div className='cart'>
        {item}
    </div>
  )
}

export default Cart