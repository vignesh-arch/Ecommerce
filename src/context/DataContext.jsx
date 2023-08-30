import {createContext, useReducer,useState} from "react"
import { data } from "./data";
import { reducer } from "./reducer";

export const DataContext=createContext({});

export const DataProvider=({children})=>{
    const [filter,dispatch]=useReducer(reducer,data);
    const [cart,updateCart]=useState([]);
    const filterProduct=(filterType,query)=>{
        dispatch(
            {
                type:filterType,
                searchQuery:query
            }
        );
    }
    const addToCart=(product)=>{
        updateCart([...cart,product]);
    }
    return(
        <DataContext.Provider value={{filteredProduct:filter,cartItems:cart,filterProduct,addToCart}}>
            {children}
        </DataContext.Provider>
    )
}
