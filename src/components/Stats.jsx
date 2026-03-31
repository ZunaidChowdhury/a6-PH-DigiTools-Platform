import React from 'react'


const Stats = () => {

    return (
        <div  className='w-full py-10 tablet:py-15 bg-brand-gradient'>

            <div className='max-w-300 mx-auto px-4 xl:px-0 grid grid-cols-1 xs:grid-cols-[1fr_1px_1fr] md:grid-cols-[1fr_1px_1fr_1px_1fr] items-center gap-8'>

                <div className='flex flex-col items-center justify-center flex-1 '>
                    <h3 className='text-white text-[2.5rem] mt:text-[3.75rem] font-extrabold leading-tight mb-3'>50K+</h3>
                    <p className='text-[#ffffffb2] text-[1.2rem] mt:text-[1.5rem] font-medium'>Active Users</p>
                </div>

                <div className="hidden xs:block w-px h-20 bg-gray-300 opacity-50"></div>

                <div className='flex flex-col items-center justify-center flex-1'>
                    <h3 className='text-white text-[2.5rem] mt:text-[3.75rem] font-extrabold leading-tight mb-3'>200+</h3>
                    <p className='text-[#ffffffb2] text-[1.2rem] mt:text-[1.5rem] font-medium'>Premium Tools</p>
                </div>

                <div className="hidden md:block w-px h-20 bg-gray-300 opacity-50"></div>

                <div className='flex flex-col items-center justify-center flex-1'>
                    <h3 className='text-white text-[2.5rem] mt:text-[3.75rem] font-extrabold leading-tight mb-3'>4.9</h3>
                    <p className='text-[#ffffffb2] text-[1.2rem] mt:text-[1.5rem] font-medium'>Rating</p>
                </div>
            </div>
        </div>
    )
}

export default Stats