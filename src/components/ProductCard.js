import React from 'react';

const ProductCard = () => {
    return (
        <div className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src="" alt="" />
            </div>
            <h1 className='font-bold text-center'>Product</h1>
            <p className='text-center font-semibold mb-3'>Rating:</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>

                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Add to cart
                </button>
                <button title='Add to wishlist' className='bg-indigo-500  py-1 px-2 rounded-full'>

                </button>
            </div>
        </div>
    );
};

export default ProductCard;