import React from 'react'
import signalImg from '../assets/signal.webp'
import playImg from '../assets/play.png'
import bannerImg from '../assets/banner.png'

const Hero = () => {
    return (
        // wrapper 
        <div className='w-full py-15 bg-background'>
            {/* container  */}
            <div className='max-w-300 mx-auto flex items-center justify-between'>
                {/* left  */}
                <div className='w-full max-w-160'>
                    {/* signal  */}
                    <div className='w-fit flex items-center gap-1 bg-[#e1e7ff] py-2 px-4 rounded-full mb-4'>
                        <div className='w-4 h-4'><img src={signalImg} alt="signal image" /></div>
                        <span className='text-base font-medium bg-brand-gradient bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                    </div>

                    <h2 className='text-text-primary text-[4.5rem] font-extrabold leading-tight mb-4'><span className='bg-brand-gradient bg-clip-text text-transparent'>Supercharge</span> Your
                        Digital Workflow</h2>

                    <p className='text-text-secondary text-[1.125rem] font-normal leading-8 mb-8'>Access premium AI tools, design assets, templates, and productivity<br />software—all in one place. Start creating faster today.<br />Explore Products
                    </p>

                    <div className='flex items-center gap-4'>
                        <button className='text-white text-base font-bold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer flex items-center gap-2'>
                            Explore Products
                            <svg
                                xmlns="http://w3.org"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>




                        </button>
                        <button className="bg-brand-gradient rounded-full p-[1px] cursor-pointer">
                            {/* The 'p-[1px]' determines the border thickness */}
                            <div className="bg-white transition-colors rounded-full px-4 py-3 flex items-center gap-2">
                                <img src={playImg} alt="play button" /><span className='bg-brand-gradient bg-clip-text text-transparent text-base font-bold'>Watch Demo</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* right  */}
                <div className='w-125'>
                    <img src={bannerImg} alt="banenr image" />
                </div>
            </div>
        </div>
    )
}

export default Hero