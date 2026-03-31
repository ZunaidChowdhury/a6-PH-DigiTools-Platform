import React from 'react'
import brandLogo from '../assets/digitools.webp'
import cartImg from '../assets/products/shopping-cart.png'

const navLinks = [
  { name: 'Products', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Testimonials', href: '/' },
  { name: 'FAQ', href: '/' }
];

const NavBar = ({ cartItems, setCurrentTab }) => {
  return (
    // wrapper 
    <div className='sticky top-0 z-100 w-full py-4 bg-background border-b border-gray-100'>
      {/* container */}
      <div className='max-w-300 mx-auto flex items-center justify-between'>
        {/* brand logo */}
        <a href="/" className='w-45 shrink-0'>
          <img src={brandLogo} alt="site logo" />
        </a>

        {/* nav links */}
        <ul className='flex items-center justify-between gap-8 '>
          {
            navLinks.map((link, i) => (
              // <li >
              //   <a href={link.href}
              //     className='text-text-primary text-base font-semibold hover:bg-brand-gradient hover:bg-clip-text hover:text-transparent transition-all duration-300'>
              //     {link.name}
              //   </a>
              // </li>
              <li key={i}>
                <a href={link.href}
                  className="
                  relative text-text-primary text-base font-semibold
                  transition-all duration-300 
                  bg-brand-gradient bg-clip-text
                  hover:text-transparent
                ">
                  {link.name}
                </a>
              </li>


            ))
          }
        </ul>

        {/* navbar right side */}
        <div className='flex items-center justify-between gap-4'>
          {/* cart */}
          <button onClick={() => { setCurrentTab('cart') }} className='hover:bg-gray-100 p-1.5 rounded-full transition-all duration-300'>
            <div className='w-4 cursor-pointer relative'>
              <img src={cartImg} alt="shopping cart" />
              {cartItems.length > 0 ? <div className='absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'><span className='text-white text-[.625rem]'>{cartItems.length}</span></div> : null}
            </div>
          </button>
          <button className='text-text-primary text-base font-semibold cursor-pointer whitespace-nowrap
                  transition-all duration-300 
                  bg-brand-gradient bg-clip-text
                  hover:text-transparent'>Log In</button>
          <button className='text-white text-base font-semibold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer whitespace-nowrap'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar