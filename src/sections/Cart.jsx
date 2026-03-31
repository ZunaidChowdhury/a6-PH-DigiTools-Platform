import React from 'react'
// import testImg from "../assets/products/writing_2327400 1.png";
import cartImg from '../assets/products/empty-cart.png';

const Cart = ({ cartItems, processCheckout, removeFromCart }) => {

    const total = cartItems.reduce((acc, item) => {
        return acc + parseFloat(item.price.replace('$', ''));
    }, 0);

    return (
        <div className=' bg-background border-2 border-[#f2f2f2] rounded-2xl p-10 space-y-6'>

            {/* title */}
            <h3 className='text-text-primary text-2xl font-bold'>Your Cart</h3>
            {/* cart items container*/}
            <div className='space-y-4'>
                {/* each cart */}
                {
                    cartItems.map(item => (
                        <div key={item.id} className=' bg-[#f9fafc]  rounded-2xl p-5 flex items-center justify-between'>
                            {/* cart item left */}
                            <div className='flex gap-4'>
                                <div className='w-15 h-15 border-2 border-gray-100 rounded-full flex items-center justify-center'>
                                    <img src={item.icon} />
                                </div>
                                <div>
                                    <h3 className='text-text-primary text-[1.25rem] font-semibold'>{item.name}</h3>
                                    <p className='text-text-secondary text-base font-medium'>{item.price}</p>
                                </div>
                            </div>
                            {/* cart item right */}
                            <button onClick={() => { removeFromCart(item) }} className='text-[#ff3980] text-base font-bold cursor-pointer'>Remove</button>
                        </div>
                    ))
                }

            </div>


            {
                cartItems.length === 0 ? <div className='flex flex-col items-center justify-center'>
                    <div className='w-30 mb-6'>
                        <img width='100%' src={cartImg} />
                    </div>
                    <p className='text-text-secondary text-base font-medium text-center'>Your cart is empty.</p>
                    <p className='text-text-secondary text-base font-normal text-center'>Add items to the Cart.</p>
                </div> :
                    <div className='space-y-6'>
                        {/* total */}
                        <div className='flex items-center justify-between'>
                            <p className='text-text-secondary text-base font-normal'>Total:</p>
                            <h3 className='text-text-primary text-2xl font-bold'>${total.toFixed(2)}</h3>
                        </div>
                        {/* checkout button */}
                        <button onClick={() => { processCheckout() }} className='w-full text-white text-base font-bold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer'>Proceed to Checkout</button>
                    </div>
            }
        </div>
    )
}

export default Cart