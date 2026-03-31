import React from 'react'

const Transform = () => {
    return (
        <div className='w-full py-10 tablet:py-30 bg-brand-gradient'>
            <div className='max-w-300 mx-auto px-4 xl:px-0'>
                {/* section heading  */}
                <div className='text-center'>
                    <h3 className='text-white text-[3rem] font-extrabold mb-4 leading-tight'>Ready to Transform Your Workflow?</h3>
                    <p className='text-white opacity-80 text-base font-normal mb-4 leading-tight'>Join thousands of professionals who are already using Digitools to work smarter.<br />
                        Start your free trial today.</p>
                </div>

                {/* section content */}
                {/* buttons container */}
                <div className='mt-10 flex items-center justify-center gap-4'>
                    <button className={`w-40 h-12 bg-white rounded-full cursor-pointer`}>
                        <span className={`bg-brand-gradient bg-clip-text text-transparent text-base font-semibold`}>Explore Products</span>
                    </button>

                    <button className={`w-40 h-12 bg-transparent border border-white  rounded-full cursor-pointer`}>
                        <span className={` text-white text-base font-semibold` }>View Pricing</span>
                    </button>
                </div>
                <ul className='mt-4 text-white opacity-80 text-base font-normal list-disc flex justify-center gap-8'>
                    <li className='list-none'>14-day free trial</li>
                    <li>No credit card required</li>
                    <li>Cancel anytime</li>
                </ul>
            </div>
        </div>
    )
}

export default Transform