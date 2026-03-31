import React from 'react'

import instagramImg from "../assets/instagram.png";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";

const footerLinksData = [
    { label: 'Product', items: ['Features', 'Pricing', 'Templates', 'Integrations'] },
    { label: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
    { label: 'Resources', items: ['Documentation', 'Help Center', 'Community', 'Contact'] },
];

const RenderQuickItem = ({ item }) => {

    return (
        <div className='space-y-4 mt-4'>
            <h2 className='text-white text-lg font-medium'>{item.label}</h2>
            <ul className='space-y-4'>
                {
                    item.items.map((item, i) => (
                        <li key={i} className='text-white opacity-70 hover:opacity-100 transition-all duration-300 text-base font-normal'><a href="#">{item}</a></li>
                    ))
                }
            </ul>
        </div>
    )
};

const Footer = () => {
    return (
        <footer className='w-full pt-10 tablet:pt-30 pb-7.5 bg-[#101727]'>
            <div className='max-w-300 mx-auto px-4 xl:px-0'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-20'>
                    {/* brand info */}
                    <div className='col-span-2'>
                        <h2 className='text-white text-[3rem] font-extrabold leading-tight mb-4'>DigiTools</h2>
                        <p className='text-white opacity-70 text-base font-normal leading-7'>Premium digital tools for creators,<br />professionals, and businesses. Work smarter <br />with our suite of powerful tools.</p>
                    </div>

                    {/* Links */}
                    {
                        footerLinksData.map((item, i) => <RenderQuickItem key={i} item={item} />)
                    }

                    {/* social */}
                    <div className='space-y-4 mt-4'>
                        <h2 className='text-white text-lg font-medium'>Social Links</h2>
                        {/* social icons container  */}
                        <div className='flex items-center gap-3'>
                            {/* insta  */}
                            <a href='#' className='w-fit p-2.5 bg-background rounded-full'>
                                <img src={instagramImg} />
                            </a>
                            {/* fb  */}
                            <a href='#' className='w-fit p-2.5 bg-background rounded-full'>
                                <img src={facebookImg} />
                            </a>
                            {/* tt  */}
                            <a href='#' className='w-fit p-2.5 bg-background rounded-full'>
                                <img src={twitterImg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full h-px bg-background opacity-10' />

                {/* bottom */}
                <div className='mt-7.5  flex items-center justify-between'>
                    <p className='text-white opacity-50 text-base font-normal'>© 2026 DigiTools. All rights reserved.</p>
                    <ul className='flex items-center gap-8'>
                        <li><a className='text-white opacity-50 text-base font-normal hover:opacity-100 transition-all duration-300' href="#">Privacy Policy</a></li>
                        <li><a className='text-white opacity-50 text-base font-normal hover:opacity-100 transition-all duration-300' href="#">Terms of Service</a></li>
                        <li><a className='text-white opacity-50 text-base font-normal hover:opacity-100 transition-all duration-300' href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer