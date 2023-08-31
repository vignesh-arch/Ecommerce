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
const CartComponent = (props) => {
    const product=props.product;
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
                <img src={product.imageURL} alt={product.name}/>
                <div className='description-container'>
                    <div className='description'>
                        <p id='name'>{product.name}</p>
                        <p id="description">{product.description}</p>
                    </div>
                    <div className='features'>
                        <button>{product.brand}</button>
                        <button>{product.gender}</button>
                        <button>{product.category}</button>
                    </div>
                    <Divider/>
                    <div className='button-group'>
                        <div class="price-container">
                            <p id="price-title">Price</p>
                            <div className='order'>
                                <div className='price-quantity'>
                                    <h1 id="cost">{cost}</h1>
                                    <ButtonGroup className="count">
                                        <Button onClick={onClickMinus}><RemoveCircleIcon/></Button>
                                        <Button>{quantity}</Button>
                                        <Button onClick={onClickPlus}><AddCircleIcon/></Button>
                                    </ButtonGroup>
                                </div>
                                <ButtonGroup className="remove">
                                    <Button onClick={()=>{addToCart(product,"delete")}} endDecorator={<Cancel/>}>Remove</Button>
                                </ButtonGroup>    
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent