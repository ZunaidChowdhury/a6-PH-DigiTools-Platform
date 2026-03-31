import React from 'react'
import StepsCard from '../components/cards/StepsCard';

const stepsData = [
    {
        "step": "01",
        "title": "Create Account",
        "description": "Sign up for free in seconds. No credit card required to get started.",
        "icon": "/images/user.png"
    },
    {
        "step": "02",
        "title": "Choose Products",
        "description": "Browse our catalog and select the tools that fit your needs.",
        "icon": "/images/package.png"
    },
    {
        "step": "03",
        "title": "Start Creating",
        "description": "Download and start using your premium tools immediately.",
        "icon": "/images/rocket.png"

    }
];


const GetStarted = () => {
    return (
        <div className='w-full py-10 tablet:py-30 bg-[#f9fafc]'>
            <div className='max-w-300 mx-auto px-4 xl:px-0'>
                {/* section heading  */}
                <div className='text-center '>
                    <h3 className='text-text-primary text-[2.5rem] tablet:text-[3rem] font-extrabold mb-4 leading-tight'>Get Started in 3 Steps</h3>
                    <p className='text-text-secondary text-base font-normal leading-tight'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* card container */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        stepsData.map((step, i) => (
                            // each card
                            <StepsCard key={i} step={step} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GetStarted