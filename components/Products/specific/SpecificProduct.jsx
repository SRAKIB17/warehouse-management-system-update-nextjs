/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Rating from '../Rating';

const SpecificProduct = ({ product }) => {
    const { DiscountPrice, category, rating, details, imageUrl, supplierName, price, title, quantity, _id } = product;
    return (
        <div className='flex flex-col gap-4'>
            <figure className='productShadow rounded-md '>
                <img
                    src={imageUrl} alt="Shoes"
                    className='md:max-w-md lg:max-w-full rounded-md lg:max-w-lg h-auto w-full servicesComponent'
                />
            </figure>
            {/* *******CARD BODY ********* */}
            <span className=' text-justify '>
                <b> Details:</b>
                {' ' + details}
            </span>

        </div>
    );
};

export default SpecificProduct;