import React from 'react';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState,useContext } from 'react';
import "../assets/styles/CartComponent.css"
import Divider from '@mui/joy/Divider';
import Cancel from '@mui/icons-material/Cancel';
import { DataContext } from '../context/DataContext';
import { AddCircleOutlineSharp,ClearOutlined,RemoveCircleOutlineSharp } from '@mui/icons-material';
const CartComponent = ({product}) => {
    const {addToCart}=useContext(DataContext);
    const [quantity,setQuantity]=useState(1);
    const [cost,updateCost]=useState(`$${product.price}`);
    const onClickPlus=()=>{
        setQuantity(quantity+1);
        updateCost(`$${(quantity+1)*product.price}`);
    }
    const onClickMinus=()=>{
        console.log(product.name)
        if(quantity>1){
            setQuantity(quantity-1);
            updateCost(`$${(quantity-1)*product.price}`);
        }
        else{
            setQuantity(1);
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
                <h4 className='cost'>{cost}</h4>
                <ButtonGroup className="btn">
                    <Button onClick={onClickMinus}><RemoveCircleOutlineSharp/></Button>
                    <Button>{quantity}</Button>
                    <Button onClick={onClickPlus}><AddCircleOutlineSharp/></Button>
                </ButtonGroup>
                <ClearOutlined className="remove" onClick={()=>{addToCart(product,"delete")}}/>
            </div>
        </div>
    )
}

export default CartComponent