import React from 'react';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import {useContext } from 'react';
import "../assets/styles/CartComponent.css"
import { DataContext } from '../context/DataContext';
import { AddCircleOutlineSharp,ClearOutlined,ProductionQuantityLimits,RemoveCircleOutlineSharp } from '@mui/icons-material';
const CartComponent = ({product}) => {
    const {addToCart,cartItems}=useContext(DataContext);
    const cost=cartItems[product.id].price*cartItems[product.id].quantity;
    const onClickPlus=()=>{
        if(cartItems[product.id].quantity<=product.items_left-1){
            addToCart(product,1);
        }
        else{
            alert(`Only ${product.items_left} items left`);
        }
    }
    const onClickMinus=()=>{
        if(cartItems[product.id].quantity>1){
           addToCart(product,-1);
        }
    }
    return (
        <div>
            <div className="cart-container">
                <img src={product.imageURL} alt="product image"/>
                <div className='details'>
                    <h4>{product.name}</h4>
                    <p>{product.gender}</p>
                    <u><p>Add Gift Wrapping</p></u>
                </div>
                <h4 className='cost'>${cost}</h4>
                <ButtonGroup className="btn">
                    <Button onClick={onClickMinus}><RemoveCircleOutlineSharp/></Button>
                    <Button>{cartItems[product.id].quantity}</Button>
                    <Button onClick={onClickPlus}><AddCircleOutlineSharp/></Button>
                </ButtonGroup>
                <ClearOutlined className="remove" onClick={()=>{addToCart(product,"delete")}}/>
            </div>
        </div>
    )
}

export default CartComponent