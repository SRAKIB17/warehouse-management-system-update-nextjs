/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './product.module.css'

const ProductShow = ({ props }) => {
    const { DiscountPrice, category, details, imageUrl, supplierName, price, title, quantity, _id } = props;

    console.log(props)
    // const getTimeSince = timeSince(time);
    return (
        <div>
            <div className={styles.productShadow + " card bg-base-100 servicesComponent h-full"}>
                <div className='card-body p-0 relative'>
                    <div>
                        <div>
                            <figure className='p-4 '>
                                <img src={imageUrl} alt="Shoes" className='w-full rounded-md h-[300px] sm:h-64 ' />
                            </figure>
                            {/* *******CARD BODY ********* */}
                            <div className='p-4 pt-6'>
                                <h2 className="text-[18px] p-2 font-bold relative">
                                    <p>
                                        {title}
                                    </p>
                                    {
                                        (props?.new === 'true') &&
                                        <div className="badge badge-secondary font-extralight absolute -top-4 right-0">
                                            NEW
                                        </div>
                                    }
                                </h2>
                                <span className='text-sm text-gray-500'>
                                    {/* Last Update: {getTimeSince} */}
                                </span>
                                <div>
                                    {/* <Rating rating={rating} /> */}
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
                        {/* ***********DESCRIPTION*********** */}
                        {/* <CourseDescription course={props} /> */}
                    </div>
                    <div className='h-[60px]'></div>
                    <div className=' absolute bottom-0 flex justify-between gap-1 p-4 w-full'>
                        <button className='btn btn-info text-white btn-sm flex gap-1'>
                            {/* <Cart size='20' color='currentColor' /> Add to Cart */}
                        </button>
                        <button className='btn btn-info text-white btn-sm flex gap-1'>
                            {/* <Love_favorite_fitness_heart_favourite_hearth_like_valentine size='20' color='currentColor' /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShow;