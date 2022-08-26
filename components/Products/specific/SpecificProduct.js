/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Rating from '../rating';

const SpecificProduct = ({ product }) => {
    const { DiscountPrice, category, rating, details, imageUrl, supplierName, price, title, quantity, _id } = product;

    return (
        <div>
            <figure className=''>
                <img
                    src={imageUrl} alt="Shoes"
                    className='sm:max-w-sm md:max-w-md rounded-md lg:max-w-lg h-auto w-full servicesComponent'
                />
            </figure>
            {/* *******CARD BODY ********* */}
            <div className='p-4 pt-6'>
                <h2 className="font-bold relative">
                    <p className='text-[21px]'>
                        {title}
                    </p>
                    
                </h2>
                <div className='text-[16px] text-gray-500 flex-col flex'>
                    <span>
                        {/* Last Update: {getTimeSince} */}
                    </span>
                    <span className='flex items-center'>
                        Content Publisher:
                        <p className='pl-2 text-primary'>
                            {/* {content_publisher} */}
                        </p>
                    </span>
                    <div>
                        <Rating rating={rating} />
                    </div>
                </div>
                <div className='text-xl flex gap-3 font-bold'>
                    {
                        DiscountPrice &&
                        <span>
                            ${DiscountPrice}
                        </span>
                    }
                    {
                        price &&
                        <span
                            className={
                                ((DiscountPrice && price)) ? 'del_discount_price font-extralight text-gray-500 ' : ' '
                            }
                        >
                            ${price}
                        </span>
                    }
                </div>
            </div>

        </div>
    );
};

export default SpecificProduct;