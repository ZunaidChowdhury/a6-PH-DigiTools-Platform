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


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';


const productsListPromise = getProducts();






function App() {

  const sectionRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const [currentTab, setCurrentTab] = useState('products');



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
      toast.error('Item already added to cart!');
      // cartItem.quantity = existingItem[0].quantity + 1;
      // const filteredCartItems = cartItems.filter(item => item.id !== cartItem.id);
      // setCartItems([...filteredCartItems, cartItem]);
    }
    else {
      setCartItems([...cartItems, cartItem]);
      toast("Item added to cart.");
    }
  };

  const removeFromCart = (item) => {
    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(filteredCartItems);
    toast("Item removed from cart.");
  }

  const processCheckout = () => {
    setCartItems([]);
    toast.success("Checkout successful!");
  }

  const scrollToCart = () => {
    // Behavior "smooth" handles the animation for you
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>

      <NavBar scrollToCart={scrollToCart} cartItems={cartItems} setCurrentTab={setCurrentTab} />
      <Hero />
      <Stats />
      <Suspense fallback={<div className="w-full h-75 p-20 flex items-center- justify-center">
        <span className="loading loading-spinner loading-xl text-primary"></span></div>}>

        <ProductsList productsListPromise={productsListPromise}
          addToCart={addToCart}
          cartItems={cartItems}
          processCheckout={processCheckout}
          removeFromCart={removeFromCart}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          sectionRef={sectionRef} />
      </Suspense>
      <GetStarted />
      <Pricing />
      <Transform />
      <Footer />
      <ToastContainer
        position="bottom-left"
        theme="dark"
      />

    </div>
  )
}

export default App
