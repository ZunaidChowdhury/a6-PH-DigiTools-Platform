import React from 'react'

const ProductCard = ({product, addToCart}) => {
    return (
        <div className='relative bg-background border-2 border-[#f2f2f2] rounded-2xl p-6 space-y-4 flex flex-col'>
            {/* badge */}
            <div className={`absolute top-2 right-2 ${product.tagType === 'best seller' ? 'bg-[#fef3c6]' : product.tagType === 'popular' ? 'bg-[#e1e7ff]' : 'bg-[#dbfce7]'} rounded-full p-0.5 px-3 w-fit`}>
                <span className={`${product.tagType === 'best seller' ? 'text-[#bb4d00]' : product.tagType === 'popular' ? 'bg-brand-gradient bg-clip-text text-transparent' : 'text-[#0a883e]'} text-sm font-medium`}>{product.tag}</span>
            </div>

            <div className='w-15 h-15 border-2 border-gray-100 rounded-full flex items-center justify-center'>
                <img src={product.icon} />
            </div>

            <h3 className='text-text-primary text-2xl font-bold'>{product.name}</h3>

            <p className='text-text-secondary text-base font-normal'>{product.description}</p>

            {/* price */}
            <div className="flex items-baseline">
                <span className="text-text-primary text-2xl font-bold tracking-tight">
                    {product.price}
                </span>
                <span className="text-text-secondary text-base font-medium">
                    {product.period}
                </span>
            </div>


            <ul className="space-y-2 grow">
                {product.features.map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                        {/* SVG Checkmark icon */}
                        <div className="shrink-0 text-[#22c55e]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-text-secondary text-base font-medium">
                            {text}
                        </span>
                    </li>
                ))}
            </ul>


            <button
                onClick={()=> {addToCart(product)}} 
                className='w-full text-white text-base font-bold py-3 px-4 bg-brand-gradient rounded-full cursor-pointer'>
                    Buy Now
            </button>
        </div>
    )
}

export default ProductCard