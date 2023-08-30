import React, { useContext,useState } from 'react'
import { DataContext } from '../context/DataContext';
import CartComponent from './CartComponent';
import "../assets/styles/Cart.css"

const Cart = () => {
  const {cartItems}=useContext(DataContext);
  const [item,setItem]=useState(cartItems.map((item)=>{
    return <CartComponent key={item.id} product={item}/>
  }));

  return (
    <div className='cart'>
        {item}
    </div>
  )
}

export default Cart