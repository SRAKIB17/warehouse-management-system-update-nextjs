/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Arrow_next_arrows_right_move from '../LogoSvg/Arrow_next_arrows_right_move';
import Cart from '../LogoSvg/Cart';
import Love_favorite_fitness_heart_favourite_hearth_like_valentine from '../LogoSvg/Love_favorite_fitness_heart_favourite_hearth_like_valentine';
import styles from './product.module.css'
import { useRouter } from 'next/router';
import Rating from './Rating';
import CheckAdmin from '../hooks/client/checkAdmin';

const ProductShow = ({ props }) => {
    const { DiscountPrice, category, rating, details, imageUrl, supplierName, price, title, quantity, _id } = props;
    // const getTimeSince = timeSince(time);
    const router = useRouter()

    CheckAdmin();
    let ratingCheck = 0
    if (Boolean(eval(rating))) {
        ratingCheck = rating;
    }
    console.log(rating)
    return (
        <div className='productBg'>
            <div className={styles.productShadow + " card servicesComponent h-full"}>
                <div className='card-body p-0 relative'>
                    <div>
                        <div>
                            <figure className='p-4 '>
                                <img src={imageUrl} alt="Shoes" className='w-full rounded-md h-56    sm:h-[11rem]' />
                            </figure>
                            {/* *******CARD BODY ********* */}
                            <div className='pl-6 pr-6 pb-4 pt-6 flex flex-col gap-1'>
                                <h2 className="text-xl p-2 font-bold relative">
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
                                    Supplier:
                                    <span className='text-primary'>
                                        {" " + supplierName}
                                    </span>
                                </span>
                                <span className='text-sm text-gray-500'>
                                    Quantity:
                                    {
                                        !Boolean(eval(quantity)) ?

                                            <span className='text-red-500'>
                                                {" "}  Stock Out
                                            </span>
                                            :
                                            <span className='text-primary'>
                                                {" " + quantity}
                                            </span>
                                    }

                                </span>
                                <div>
                                    <Rating rating={ratingCheck} />
                                </div>
                                <div className='text-xl flex gap-3 font-bold text-orange-500'>
                                    Price:
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
                    <div className='h-[40px]'></div>
                    <div className=' absolute bottom-0 flex justify-between gap-1 p-4 w-full'>
                        <button className='btn btn-info w-full text-white btn-sm flex gap-1' onClick={() => router.replace('/products/inventory/' + _id)}>
                            Manage Item
                            <Arrow_next_arrows_right_move size='20' color='currentColor' />
                        </button>
                        {/* <button className=' btn-info  btn-sm text-white btn flex gap-1' onClick={() => router.replace('/products/' + _id)}>
                            buy now  <Arrow_next_arrows_right_move size='20' color='currentColor' />
                        </button> */}

                        {/* <button className='btn btn-info  btn-sm text-white  flex gap-1'>
                            <Cart size='20' color='currentColor' /> Add
                        </button>

                        <button className='btn btn-info  btn-sm text-white flex gap-1'>
                            <Love_favorite_fitness_heart_favourite_hearth_like_valentine size='20' color='currentColor' />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShow;