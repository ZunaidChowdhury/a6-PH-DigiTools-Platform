import React, { useState } from 'react'
import brandLogo from '../assets/digitools.webp'
import cartImg from '../assets/products/shopping-cart.png'


const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '/#products' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Testimonials', href: '/' },
  { name: 'FAQ', href: '/' }
];

const NavBar = ({ cartItems, setCurrentTab, scrollToCart }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    // wrapper 
    <div className='sticky top-0 z-100 w-full py-4 bg-background border-b border-gray-100'>
      {/* container */}
      <div className='max-w-300 mx-auto flex items-center justify-between px-4 xl:px-0'>
        {/* brand logo */}
        <a href="/" className='w-32 tablet:w-45 shrink-0'>
          <img src={brandLogo} alt="site logo" />
        </a>

        {/* nav links */}
        <ul className='hidden lg:flex items-center justify-between gap-8 '>
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
          <button onClick={() => { scrollToCart(); setCurrentTab('cart');   }} className='hover:bg-gray-100 p-1.5 rounded-full transition-all duration-300'>
            <div className='w-4 cursor-pointer relative'>
              <img src={cartImg} alt="shopping cart" />
              {cartItems.length > 0 ? <div className='absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'><span className='text-white text-[.625rem]'>{cartItems.length}</span></div> : null}
            </div>
          </button>
          <button className='hidden sm:inline text-text-primary text-base font-semibold cursor-pointer whitespace-nowrap
                  transition-all duration-300 
                  bg-brand-gradient bg-clip-text
                  hover:text-transparent'>Log In</button>
          <button className='hidden tablet:inline text-white text-base font-semibold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer whitespace-nowrap'>Get Started</button>

          {/* hamburger */}
          <button onClick={() => { setOpenMobileNav(!openMobileNav) }} className='lg:hidden hover:bg-gray-100 p-1.5 rounded-full transition-all duration-300 cursor-pointer'>
            < svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg >
          </button>
        </div>
      </div>

      {/* mobile nav  */}
      {
        openMobileNav && <div className='z10 absolute right-0 top-16 tablet:right-2 tablet:top-18 bg-gray-100 w-50 flex flex-col shadow-xl lg:hidden '>
          <ul>
            {
              navLinks.map((link, i) => (
                // <li >
                //   <a href={link.href}
                //     className='text-text-primary text-base font-semibold hover:bg-brand-gradient hover:bg-clip-text hover:text-transparent transition-all duration-300'>
                //     {link.name}
                //   </a>
                // </li>
                <li key={i} className='hover:bg-gray-200 px-4 py-2.5'>
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

          <div className='hover:bg-gray-200 px-4 py-2.5 inline sm:hidden'>
            <button className='text-left  text-text-primary text-base font-semibold cursor-pointer whitespace-nowrap
                  transition-all duration-300 
                  bg-brand-gradient bg-clip-text
                  hover:text-transparent'>Log In</button>
          </div>
          <div className='hover:bg-gray-200 px-4 py-2.5 inline tablet:hidden '>
            <button className='w-full text-white text-base font-semibold  py-2 px-4 bg-brand-gradient rounded-full cursor-pointer whitespace-nowrap'>Get Started</button>
          </div>
        </div>
      }
    </div >
  )
}

export default NavBar





