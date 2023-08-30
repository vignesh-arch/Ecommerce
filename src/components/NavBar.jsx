import React, { useContext, useState } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Autocomplete from '@mui/joy/Autocomplete';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { data } from '../context/data';
import Home from './Home';
import { DataContext } from '../context/DataContext';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import Cart from './Cart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../assets/styles/NavBar.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const NavBar = () => {
  const context=useContext(DataContext);
  const [filter,setFilter]=useState("All");
  const [query,setQuery]=useState("");
  const options=data.map((products)=>{
    return {
      label:products.name
    }
  });

  function onFilter(event,value){
    setFilter(value);
    context.filterProduct(value,query);
  }
  function onSearch(event,value){
    if(value!=null){
      console.log(value);
      setQuery(value);
      context.filterProduct(filter,value);
    }
  }
  function onSearchChange(event,value){
    if(value!=null){
      setQuery(value.label);
      context.filterProduct(filter,value.label)
    }
  }
  return (
    <div>
        <BrowserRouter>
                <nav>
                    <div className="nav">
                    <div className="logo">
                      <Link to="/"><h1>LemoCart</h1></Link>
                    </div>
                    <div className="search">
                    <Autocomplete
                        startDecorator={<SearchIcon/>}
                        value={query}
                        onChange={onSearchChange}
                        inputValue={query}
                        onInputChange={onSearch}
                        variant="soft"
                        placeholder="Find your shoes here..."
                        options={options}
                        sx={{marginRight:1,width:600}}
                    />
                    <Select  
                      sx={{width:150,marginRight:1}}
                      defaultValue="All" 
                      variant="soft"
                      startDecorator={<FilterAltIcon/>}
                      value={filter}
                      onChange={onFilter}>
                      <Option value="All">All</Option>
                      <Option value="Men">Men</Option>
                      <Option value="Women">Women</Option>
                      <Option value="Kids">Kids</Option>
                      <Option value="In stock">In Stock</Option>
                      <Option value="Out Stock">Out Stock</Option>
                    </Select>
                    <Button onClick={()=>context.filterProduct(filter,query)}>Search</Button>
                    </div>
                    <div className="nav-bar">
                        <Link to="/cart" className="nav-text"><Button startDecorator={<ShoppingBagIcon/>}>Cart</Button></Link>
                    </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default NavBar