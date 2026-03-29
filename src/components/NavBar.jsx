import React from 'react'
import brandLogo from '../assets/digitools.webp'
import cartImg from '../assets/products/shopping-cart.png'

const NavBar = () => {
  return (
    // wrapper 
    <div className='w-full py-4 bg-background border-b border-gray-100'>
        {/* container */}
        <div className='max-w-300 mx-auto flex items-center justify-between'>
          {/* brand logo */}
          <div>
            <img src={brandLogo} alt="site logo" />
          </div>

          {/* nav links */}
          <ul className='flex items-center justify-between gap-8 text-text-primary text-base font-semibold'>
            <li><a href="/">Products</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>

          {/* navbar right side */}
          <div className='flex items-center justify-between gap-4'>
            {/* cart */}
            <div className='w-4 cursor-pointer relative'>
              <img  src={cartImg} alt="shopping cart" />
              <div className='absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'><span className='text-white text-[.625rem]'>1</span></div>
            </div>
            <button className='text-text-primary text-base font-semibold cursor-pointer'>Log In</button>
            <button className='text-white text-base font-semibold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default NavBar