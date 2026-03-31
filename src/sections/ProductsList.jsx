import React, { use, useState } from 'react'
import ProductCard from '../components/cards/ProductCard';
import Cart from './Cart';
// import productImg from "../assets/products/design-tool.png";

const activeTab = `text-white text-base font-bold py-3 px-6 bg-brand-gradient rounded-full cursor-pointer`;
const inactiveTab = `text-[#25065d] text-base font-medium py-3 px-6  rounded-full cursor-pointer`;


const ProductsList = ({ productsListPromise, addToCart, cartItems, processCheckout, removeFromCart, currentTab, setCurrentTab }) => {



    const productsListData = use(productsListPromise);
    // console.log('data: ', productsListData);

    return (
        <div className='w-full py-30 bg-background'>
            <div className='max-w-300 mx-auto'>
                {/* section heading  */}
                <div className='text-center'>
                    <h3 className='text-text-primary text-[3rem] font-extrabold mb-4 leading-tight'>Premium Digital Tools</h3>
                    <p className='text-text-secondary text-base font-normal mb-4 leading-tight'>Choose from our curated collection of premium digital products designed<br />
                        to boost your productivity and creativity.</p>
                </div>

                {/* tab buttons */}
                <div className='flex justify-center mb-10'>
                    <div className='bg-white border-2 border-gray-100 p-1 rounded-full w-fit'>
                        <button onClick={() => { setCurrentTab('products') }}
                            className={currentTab === 'products' ? activeTab : inactiveTab}>Products</button>
                        <button onClick={() => { setCurrentTab('cart') }}
                            className={currentTab === 'cart' ? activeTab : inactiveTab}>Cart ({cartItems.length})</button>
                    </div>
                </div>


                {
                    currentTab === 'products' ? (
                        < div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                            {
                                productsListData.map((product) => (
                                    // each card
                                    <ProductCard key={product.id} product={product} addToCart={addToCart} cartItems={cartItems} />
                                ))
                            }
                        </div>) : currentTab === 'cart' ? <Cart cartItems={cartItems} processCheckout={processCheckout} removeFromCart={removeFromCart} /> : null
                }




            </div>
        </div >
    )
}

export default ProductsList