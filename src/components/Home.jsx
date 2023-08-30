
import { useContext,useState,useEffect } from 'react';
import { DataContext } from '../context/DataContext'
import Product from './Product';
import '../assets/styles/Home.css'

const Home = () => {
  const {filteredProduct}=useContext(DataContext);
  const [productList,setProductList]=useState(filteredProduct.map((product)=>{
    return <Product className="products" key={product.id} product={product}/>
  }));
  useEffect(()=>{
    setProductList(filteredProduct.map((product)=>{
      return <Product key={product.id} product={product}/>
    }))
  },[filteredProduct])
  return (
    <div className='product-list'>
      {
        productList
      }
    </div>
  )
}

export default Home