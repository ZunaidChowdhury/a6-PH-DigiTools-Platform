import React from 'react'
import StepsCard from '../components/cards/StepsCard';

const stepsData = [
    {
        "step": "01",
        "title": "Create Account",
        "description": "Sign up for free in seconds. No credit card required to get started.",
        "icon": "/src/assets/user.png"
    },
    {
        "step": "02",
        "title": "Choose Products",
        "description": "Browse our catalog and select the tools that fit your needs.",
        "icon": "/src/assets/package.png"
    },
    {
        "step": "03",
        "title": "Start Creating",
        "description": "Download and start using your premium tools immediately.",
        "icon": "/src/assets/rocket.png"

    }
];


const GetStarted = () => {
    return (
        <div className='w-full py-30 bg-[#f9fafc]'>
            <div className='max-w-300 mx-auto'>
                {/* section heading  */}
                <div className='text-center '>
                    <h3 className='text-text-primary text-[3rem] font-extrabold mb-4 leading-tight'>Get Started in 3 Steps</h3>
                    <p className='text-text-secondary text-base font-normal leading-tight'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* card container */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
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