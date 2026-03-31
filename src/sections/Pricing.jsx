import React from 'react'
import PriceCard from '../components/cards/PriceCard';

const pricingCardData = [
    {
        "id": 1,
        "name": "Starter",
        "description": "Perfect for getting started",
        "price": "$0",
        "period": "/Month",
        "tag": "",
        "tagType": "",
        "features": [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month"
        ],
        "btnText": "Get Started Free"
    },
    {
        "id": 2,
        "name": "Pro",
        "description": "Best for professionals",
        "price": "$29",
        "period": "/Month",
        "tag": "Most Popular",
        "tagType": "popular",
        "features": [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics"
        ],
        "btnText": "Start Pro Trial"
    },
    {
        "id": 3,
        "name": "Enterprise",
        "description": "For teams and businesses",
        "price": "$99",
        "period": "/Month",
        "tag": "",
        "tagType": "",
        "features": [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding"
        ],
        "btnText": "Contact Sales"
    }
];

const Pricing = () => {
    return (
        <div id='pricing' className='w-full py-10 tablet:py-30 bg-background'>
            <div className='max-w-300 mx-auto px-4 xl:px-0'>
                {/* section heading  */}
                <div className='text-center'>
                    <h3 className='text-text-primary text-[3rem] font-extrabold mb-4 leading-tight'>Simple, Transparent Pricing</h3>
                    <p className='text-text-secondary text-base font-normal leading-tight'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* card container */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
                    {
                        pricingCardData.map((pricingCard, i) => (
                            // each card
                            <PriceCard key={i} pricingCard={pricingCard} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing