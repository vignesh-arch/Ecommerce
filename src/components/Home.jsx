
import { useContext,useRef } from 'react';
import { DataContext } from '../context/DataContext'
import Product from './Product';
import '../assets/styles/Home.css'

const Home = () => {
  const {filteredProduct}=useContext(DataContext);

  const productList=[...filteredProduct].map((product)=>{
      return <Product className="products" key={product.id} product={product}/>
    });
  return (
    <div className='product-list'>
      {
        productList
      }
    </div>
  )
}

export default Home