import { useContext,useState,useEffect,useRef } from "react";
import { DataContext } from "../context/DataContext";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../assets/styles/Product.css';
import { useNavigate } from "react-router-dom";
import Divider from "@mui/joy/Divider";
import DoneIcon from '@mui/icons-material/Done';
import { NotificationsActiveTwoTone, NotificationsNoneTwoTone } from "@mui/icons-material";
const Product = (props) => {
    const navigate=useNavigate();
    let notifyStyle={};
    const {addToCart,cartItems}=useContext(DataContext);
    const product={...props.product};
    const [styles,setStyles]=useState({
      color:"#999999",cursor:"pointer",position:"relative",top:"3.2rem",right:"0.5rem"
    });
    const [cartIcon,setCartIcon]=useState(
      product.is_in_inventory===true?
      cartItems.itemId.includes(product.id)?
      {icon:<DoneIcon/>,text:"Go to cart"}:
      {icon:<AddShoppingCartIcon/>,text:"Add to Cart"}:
      {icon:<NotificationsNoneTwoTone/>,text:"Notify Me"});
    if(cartIcon.text==="Notify Me"){
      notifyStyle={backgroundColor:"#f84f31",color:"white"}
    }
    else if(cartIcon.text==="Will Notify Soon"){
      notifyStyle={backgroundColor:"#23c552",color:"#333333"}
    }
    const onCartAdd=(e)=>{
      console.log(cartItems);
      if([...cartItems.itemId].includes(product.id)){
        console.log("found")
        navigate('/cart');
      }
      else if(cartIcon.text==="Notify Me"){
        setCartIcon({icon:<NotificationsActiveTwoTone/>,text:"Will Notify Soon"})
      }
      else{
        if(cartIcon.text!=="Will Notify Soon"){
          addToCart(product,"add");
          setCartIcon({icon:<DoneIcon/>,text:"Go to Cart"});
        }
      }
    }

    return (
    <div className="container">
        <div className="title-container">
          <p className="category">{product.category}</p>
          <FavoriteTwoToneIcon 
            onClick={()=>{setStyles(styles.color==="#999999"?
              {...styles,color:"red",cursor:"pointer"}:
              {...styles,color:"#999999",cursor:"pointer"}
              )}
            }
            sx={styles}/>
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
            <button style={notifyStyle} onClick={onCartAdd}>
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