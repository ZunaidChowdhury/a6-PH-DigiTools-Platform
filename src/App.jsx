import './App.css'
import ProductsList from './sections/ProductsList'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import GetStarted from './sections/GetStarted'
import Pricing from './sections/Pricing'
import Transform from './sections/Transform'
import Footer from './sections/Footer'
import { Suspense, useState } from 'react'
import { getProducts } from './api/products'
import Cart from './sections/Cart'

const productsListPromise = getProducts();


function App() {

  const [cartItems, setCartItems] = useState([]);




  const addToCart = (item) => {
    // console.log(item);

    const cartItem = {
      id: item.id,
      icon: item.icon,
      name: item.name,
      price: item.price,

    };
    // console.log('cartItems: ', cartItems);
    // console.log('cartItem: ', cartItem);
    const existingItem = cartItems.filter(item => item.id === cartItem.id);

    // console.log('existingItem: ', existingItem);
    
    if (existingItem.length > 0) {
      alert('Item exists!');
      // cartItem.quantity = existingItem[0].quantity + 1;
      // const filteredCartItems = cartItems.filter(item => item.id !== cartItem.id);
      // setCartItems([...filteredCartItems, cartItem]);
    }
    else {
      setCartItems([...cartItems, cartItem]);
    }
  };

  const removeFromCart = (item) => {
    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(filteredCartItems);
  }

  const processCheckout = () => {
    setCartItems([]);
  }

  return (
    <div>
      <NavBar cartItems={cartItems} />
      <Hero />
      <Stats />
      <Suspense fallback={<div className="text-center p-20">Loading...</div>}>

        <ProductsList productsListPromise={productsListPromise} addToCart={addToCart} cartItems={cartItems} processCheckout={processCheckout} removeFromCart={removeFromCart} />
      </Suspense>
      <GetStarted />
      <Pricing />
      <Transform />
      <Footer />
    </div>
  )
}

export default App
