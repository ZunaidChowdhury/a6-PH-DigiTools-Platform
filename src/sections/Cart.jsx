import React from 'react'
import testImg from "../assets/products/writing_2327400 1.png";

const Cart = () => {
    return (
        <div className=' bg-background border-2 border-[#f2f2f2] rounded-2xl p-10 space-y-6'>

            {/* title */}
            <h3 className='text-text-primary text-2xl font-bold'>Your Cart</h3>
            {/* cart items container*/}
            <div className='space-y-4'>
                {/* each cart */}
                <div className=' bg-[#f9fafc]  rounded-2xl p-5 flex items-center justify-between'>
                    {/* cart item left */}
                    <div className='flex gap-4'>
                        <div className='w-15 h-15 border-2 border-gray-100 rounded-full flex items-center justify-center'>
                            <img src={testImg} />
                        </div>
                        <div>
                            <h3 className='text-text-primary text-[1.25rem] font-semibold'>Your Cart</h3>
                            <p className='text-text-secondary text-base font-medium'>$29</p>
                        </div>
                    </div>
                    {/* cart item right */}
                    <button className='text-[#ff3980] text-base font-bold'>Remove</button>
                </div>
            </div>

            {/* total */}
            <div className='flex items-center justify-between'>
                <p className='text-text-secondary text-base font-normal'>Total:</p>
                <h3 className='text-text-primary text-2xl font-bold'>$78</h3>
            </div>
            {/* checkout button */}
            <button className='w-full text-white text-base font-bold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer'>Proceed to Checkout</button>
        </div>
    )
}

export default Cart