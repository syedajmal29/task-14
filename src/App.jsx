import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Nav';
import Heading from './Heading';
import BasicExample from './Card';
import Footer from './Footer';

const products = [
  {
    title: "Fancy Product",
    price: [{
     cost: "$40.00 - ",
enable: true
    
    },{
     cost:   "$80.00",
     enable: true
    
    }],
    button: "View options",
    onSale: false,
    rating: null
  },
  {
    title: "Special Item",
    price: [{
      cost: "$20.00",
 enable: false
     
     },{
      cost:   " $18.00",
      enable: true
     
     }],
    button: "Add to cart",
    onSale: true,
    rating: 5,
    cart :true
  },
  {
    title: "Sale Item",
    price: [{
      cost: "$50.00",
 enable: false
     
     },{
      cost:   " $25.00",
      enable: true
     
     }],
    button: "Add to cart",
    onSale: true,
    rating: null,
    cart :true
  },
  {
    title: "Popular Item",
    price: [{
      cost: "$40.00",
 enable: true
     
     }],
    button: "Add to cart",
    onSale: false,
    rating: 5,
    cart :true
  },
  {
    title: "Sale Item",
    price: [{
      cost: "$50.00",
 enable: false
     
     },{
      cost:   " $25.00",
      enable: true
     
     }],
    button: "Add to cart",
    onSale: true,
    rating: null,
    cart :true
  },
  {
    title: "Fancy Product",
    price:  [{
      cost: "$120.00 - ",
 enable: true
     
     },{
      cost:   " $280.00",
      enable: true
     
     }],
    button: "View options",
    onSale: false,
    rating: null
  },
  {
    title: "Special Item",
    price: [{
      cost: "$20.00",
 enable: false
     
     },{
      cost:   " $18.00",
      enable: true
     
     }],
    button: "Add to cart",
    onSale: true,
    rating: 5,
    cart :true
  },
  {
    title: "Popular Item",
    price: [{
      cost: "$40.00",
 enable: "true"
     
     }],
    button: "Add to cart",
    onSale: false,
    rating: 5,
    cart :true
  }
];


function App() {
  const [add,setadd]=useState(0);
    const ad = ()=>{
        setadd(add + 1)
    }
  return (
    <>
    
     <Header addcount={add}/>
     <Heading />
     <div className='row m-0'>
   
      {
        products.map((product,index)=>(
          <BasicExample key={index} title={product.title} price={product.price} button={product.button} rating={product.rating} sale={product.onSale} addcart={ad} cart={product.cart} />
        ))
      }
    
     </div>
     <Footer />
    
    </>
  )
}

export default App