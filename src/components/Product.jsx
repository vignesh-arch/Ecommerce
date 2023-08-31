import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../assets/styles/Product.css';
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/joy/Divider";
import DoneIcon from '@mui/icons-material/Done';
const Product = (props) => {
    const navigate=useNavigate();
    const {addToCart,cartItems}=useContext(DataContext);
    const product={...props.product};
    const [styles,setStyles]=useState({
      color:"#444444",cursor:"pointer"
    });
    const [cartIcon,setCartIcon]=useState(cartItems.itemId.includes(product.id)?{icon:<DoneIcon/>,text:"Go to cart"}:{icon:<AddShoppingCartIcon/>,text:"Add to Cart"});
    const onCartAdd=(e)=>{
      console.log(cartItems);
      if([...cartItems.itemId].includes(product.id)){
        console.log("found")
        navigate('/cart');
      }
      else{
        addToCart(product,"add");
        setCartIcon({icon:<DoneIcon/>,text:"Go to Cart"});
      }
    }
    
    return (
    <div className="container">
        <div className="title-container">
          <p className="category">{product.category}</p>
          <FavoriteTwoToneIcon onClick={()=>{setStyles(styles.color==="#444444"?{
            color:"red",cursor:"pointer"
          }:{color:"#444444",cursor:"pointer"})}} sx={styles}/>
        </div>
        <img src={product.imageURL} alt={product.name}/>
        <div className="price-container"> 
          <div className="price-category">
            <div className="brand-stock">
              <h4 className="brand">{product.brand}</h4>
              <p className="stock" style={{backgroundColor:product.is_in_inventory===true?"green":"red"}}>
                {product.is_in_inventory===true?"In Stock":"Out Stock"}
              </p>
            </div>
            <p className="name">{product.name}</p>  
          </div>
          <Divider />
          <div className="price-cart">
            <div className="title-price">
              <p className="price-title">Price</p>
              <p className="price">${product.price}</p>
            </div>
            <button onClick={onCartAdd}>
              <div className="add-cart">
                {cartIcon.icon}<p>{cartIcon.text}</p>
              </div>
            </button>
          </div>  
        </div>
    </div>
  )
}

export default Product