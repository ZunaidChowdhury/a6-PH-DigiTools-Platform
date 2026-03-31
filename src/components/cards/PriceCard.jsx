import React from 'react'

const PriceCard = ({ pricingCard }) => {
    // console.log(pricingCard);

    return (
        <div className={`relative ${pricingCard.tagType === 'popular' ? 'bg-brand-gradient' : 'bg-background'}  border-2 border-[#f2f2f2] 
        rounded-2xl p-6 space-y-4 flex flex-col hover:scale-101 hover:shadow-lg transition-all duration-300`}>

            {pricingCard.tag && <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fef3c6] rounded-full p-0.5 px-3 w-fit`}>
                <span className={`text-[#bb4d00] text-sm font-medium whitespace-nowrap`}>{pricingCard.tag}</span>
            </div>}

            <h3 className={` ${pricingCard.tagType === 'popular' ? 'text-white' : 'text-text-primary'} text-2xl font-bold`}>{pricingCard.name}</h3>

            <p className={`${pricingCard.tagType === 'popular' ? 'text-white opacity-80' : 'text-text-primary'}  text-base font-normal`}>{pricingCard.description}</p>

            {/* price */}
            <div className="flex items-baseline">
                <span className={` ${pricingCard.tagType === 'popular' ? 'text-white' : 'text-text-primary'}  text-[2.5rem] font-bold tracking-tight`}>
                    {pricingCard.price}
                </span>
                <span className={` ${pricingCard.tagType === 'popular' ? 'text-white opacity-90' : 'text-text-primary'}  text-xl font-medium`}>
                    {pricingCard.period}
                </span>
            </div>


            <ul className="space-y-2 flex-1">
                {pricingCard.features.map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                        {/* SVG Checkmark icon */}
                        <div className={`shrink-0  ${pricingCard.tagType === 'popular' ? 'text-white opacity-90' : 'text-[#22c55e]'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className={`${pricingCard.tagType === 'popular' ? 'text-white opacity-90' : 'text-text-primary'}  text-base font-medium`}>
                            {text}
                        </span>
                    </li>
                ))}
            </ul>


            <button className={`w-full text-white text-base font-bold py-3 px-4  ${pricingCard.tagType === 'popular' ? 'bg-white' : 'bg-brand-gradient'} rounded-full cursor-pointer`}>
                <span className={`${pricingCard.tagType === 'popular' ? 'bg-brand-gradient bg-clip-text text-transparent' : 'text-white'}`}>{pricingCard.btnText}</span>
            </button>
        </div>
    )
}

export default PriceCard