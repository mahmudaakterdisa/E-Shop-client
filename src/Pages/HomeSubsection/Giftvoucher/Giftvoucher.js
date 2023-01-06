import React from 'react';

const Giftvoucher = () => {
    return (
        <div className='flex max-lg:flex-col mb-20 mx-10  bg-zinc-400'>
            <div className='w-6/12 p-10 max-lg:w-full'>
                <img className='border-2 border-black' src="https://img.freepik.com/free-vector/black-friday-sale-promotion-poster-banner-design-special-offer-50-sale-promotion-shopping-vector-template_460848-6909.jpg?w=1060&t=st=1672972393~exp=1672972993~hmac=e530c6c3df54bc8cc2cbc5dd527745d10d77cdcc5efb536fbf98837a067e7de9" alt="" />
            </div>
            <div className='text-left max-lg:text-center font-semibold max-sm:text-6xl sm:text-8xl p-10 '>
                <p className=' text-red-500'>50<span className='text-2xl'>%</span></p>
                <p> WINTER SALE</p>
            </div>
        </div>
    );
};

export default Giftvoucher;