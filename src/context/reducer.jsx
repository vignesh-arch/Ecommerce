import { data } from "./data"
export const reducer=(state,action)=>{
    let products=data.filter((product)=>{
        switch(action.type){
            case "Men":
                console.log(action.type)
                return product.gender==="MEN";
            case "Women":
                return product.gender==="WOMEN";
            case "Kids":
                return product.gender==="KIDS";
            case "In Stock":
                return product.is_in_inventory===true;
            case "Out Stock":
                return product.is_in_inventory===false;
            default:
                return product;
        }
    });
    if(action.searchQuery!==""){
        return products.filter((product)=>{
            return product.name.toLowerCase().includes(action.searchQuery.toLowerCase());
        })
    }
    else{
        return products;
    }

}