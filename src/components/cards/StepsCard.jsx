import React from 'react'

const StepsCard = ({ step }) => {
    // console.log(step);

    return (
        <div className=' h-95 relative bg-background border-2 border-[#f2f2f2] rounded-2xl p-6 space-y-4 flex flex-col items-center justify-center'>

            <div className='absolute top-4 right-4 w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center'><span className='text-white text-base font-bold'>{step.step}</span></div>
            <div className='bg-[#F3E8FE] rounded-full w-25 h-25 flex items-center justify-center'>
                <img src={step.icon} />
            </div>
            <h3 className='text-text-primary text-2xl font-bold '>{step.title}</h3>
            <p className='text-text-secondary text-base text-center'>{step.description}</p>
        </div>
    )
}

export default StepsCard