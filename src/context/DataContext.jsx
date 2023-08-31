import {createContext, useReducer,useState} from "react"
import { data } from "./data";
import { reducer } from "./reducer";
import { ProductionQuantityLimits } from "@mui/icons-material";

export const DataContext=createContext({});

export const DataProvider=({children})=>{
    const [filter,dispatch]=useReducer(reducer,data);
    const [cart,updateCart]=useState({items:[],itemId:[]});
    const filterProduct=(filterType,query)=>{
        dispatch(
            {
                type:filterType,
                searchQuery:query
            }
        );
    }
    const addToCart=(product,type)=>{
        if(type==="add"){
            updateCart({items:[...cart.items,product],itemId:[...cart.itemId,product.id]});
        }
        else{
            updateCart({
                items:[...cart.items.filter((item)=>{
                    return item.id!==product.id;
                }
                )],
                itemId:[...cart.itemId.filter((id)=>{
                    return id!==product.id;
                })]
            });
        }
    }
    return(
        <DataContext.Provider value={{filteredProduct:filter,cartItems:cart,filterProduct,addToCart}}>
            {children}
        </DataContext.Provider>
    )
}
