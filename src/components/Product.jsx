import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../assets/styles/Product.css';
import { Link } from "react-router-dom";
import Divider from "@mui/joy/Divider";
import DoneIcon from '@mui/icons-material/Done';
import { Done } from "@mui/icons-material";
const Product = (props) => {
    const {addToCart}=useContext(DataContext);
    const product=props.product;
    const [styles,setStyles]=useState({
      color:"#444444",cursor:"pointer"
    });
    const onCartAdd=(e)=>{
      addToCart(product);
      setCartButton(
        <Link id="cart" to="/cart">
          <button onClick={onCartAdd}>
            <div className="add-cart">
              <DoneIcon/><p>Go To Cart</p>
            </div>
          </button>
        </Link>
      )
    }
    const [cartButton,setCartButton]=useState(
    <Link id="cart">
      <button onClick={onCartAdd}>
        <div className="add-cart">
          <AddShoppingCartIcon/><p>Add to Cart</p>
        </div>
      </button>
    </Link>
    );
    
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
            <h4 className="brand">{product.brand}</h4>
            <p className="name">{product.name}</p>  
          </div>
          <Divider />
          <div className="price-cart">
            <div className="title-price">
              <p className="price-title">Price</p>
              <p className="price">${product.price}</p>
            </div>
            {cartButton}
          </div>  
        </div>
    </div>
  )
}

export default Product