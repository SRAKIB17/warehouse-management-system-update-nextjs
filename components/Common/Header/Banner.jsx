import React from 'react';
import CommonBanner from './CommonBanner';

const Banner = () => {
    return (
        <div className='relative shadow-sm'>
            <div>
                <div className='z-[-1] relative'>
                    <div style={{ backgroundImage: `url('/icon/header/headerBannerBg.png')`, backgroundRepeat: "no-repeat", backgroundSize: '230px 250px' }} className='absolute min-w-[230px] top-0 left-0 h-80'>

                    </div>

                    <div style={{ backgroundImage: `url('/icon/header/header-bg-banner-right.png')`, backgroundRepeat: "no-repeat", backgroundSize: '230px 250px' }}
                        className='h-80 absolute min-w-[230px]  right-0'
                    >
                    </div>
                </div>
                <CommonBanner/>
                <div
                    className='flex md:flex-row flex-col-reverse justify-between w-full md:items-center z-10 md:pl-20 md:pr-20 p-10'
                >
                    <div className='w-full md:w-[50%] flex gap-2 flex-col'>
                        <span className='text-xl text-[#347C10]'>
                            Welcome To Our Shop Grocery warehouse
                        </span>
                        <h1 className='text-primary text-4xl font-bold'>
                            Shop Online For
                        </h1>
                        <h1 className='text-secondary text-3xl'>
                            Fresh Grocries
                        </h1>
                        <span className='text-justify'>
                            The center of the store is typically called the Grocery department and while it does not always make up the largest percentage of a store{"'"}s sales, it is the largest department in the store.
                        </span>
                        <button className='btn btn-primary w-fit sm:btn-md btn-xs mt-5 font-extralight btn-outline'>
                            Products
                        </button>
                    </div>
                    <div className='mb-8 md:mb-0 w-full md:w-[50%] flex justify-end '>
                        <img src="/icon/header/banner.png" alt=""
                            className=' w-full max-w-sm h-40 h-[270px] md:max-w-md block md:h-[300px] '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;