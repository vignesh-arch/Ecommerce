import {createContext, useReducer} from "react";
import { useImmer } from "use-immer";
import { data } from "./data";
import { reducer } from "./reducer";

export const DataContext=createContext({});

export const DataProvider=({children})=>{
    const [filter,dispatch]=useReducer(reducer,data);
    const [cart,updateCart]=useImmer({});
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
            updateCart(draft=>{
                return {...draft,[product.id]:product}
            });
        }
        else if(typeof type==='number'){
            updateCart(draft=>{
                draft[product.id].quantity+=type;
            });
        }
        else{
            console.log(Object.keys(cart).
            filter((key)=>key!==product.id));
            let items=Object.keys(cart).
                filter((key)=>key!=product.id).
                reduce((obj,key)=>{
                    obj[key]=cart[key];
                    return obj;
                },{})
            console.log(items);
            updateCart(items);
        }
    }
    return(
        <DataContext.Provider value={{filteredProduct:filter,cartItems:cart,filterProduct,addToCart}}>
            {children}
        </DataContext.Provider>
    )
}
