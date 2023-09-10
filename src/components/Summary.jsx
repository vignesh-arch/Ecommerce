import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { ArrowForward, ArrowForwardIosRounded, ArrowForwardOutlined, ArrowForwardRounded, KeyboardArrowRight } from '@mui/icons-material';
import Button from '@mui/joy/Button'
import '../assets/styles/Summary.css'

const Summary = () => {
  const {cartItems}=useContext(DataContext);
  const items=Object.values(cartItems).map(item=>item.quantity*item.price);
  const subTotal=items.reduce((total,value)=>{
    return total+value;
  },0)
  const shippingTax=0;
  const total=subTotal+shippingTax;
  return (
    <div className='summary'>
      <h4>Order Summary</h4>
      <div className='subtotal'>
        <p>Subtotal</p>
        <p>{subTotal}</p>
      </div>
      <div className='ship'>
        <p>Shipping+Tax</p>
        <p>$0</p>
      </div>
      <div className='coupon'>
        <p>Coupon Code</p>
        <u><p>Apply Coupon Code</p></u>
      </div>
      <div className='total'>
        <p>Total</p>
        <p>{total}</p>
      </div>
      <Button>
        CheckOut<KeyboardArrowRight/>
      </Button>
    </div>
  )
}

export default Summary