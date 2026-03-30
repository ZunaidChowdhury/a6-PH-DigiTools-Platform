import './App.css'
import ProductsList from './sections/ProductsList'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import GetStarted from './sections/GetStarted'
import Pricing from './sections/Pricing'
import Transform from './sections/Transform'
import Footer from './sections/Footer'
import { Suspense } from 'react'
import { getProducts } from './api/products'
import Cart from './sections/Cart'

const productsListPromise =  getProducts();


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Stats />
      <Suspense fallback={<div className="text-center p-20">Loading...</div>}>

      <ProductsList productsListPromise={productsListPromise} />
      </Suspense>
      <GetStarted />
      <Pricing />
      <Transform />
      <Footer />
    </div>
  )
}

export default App
