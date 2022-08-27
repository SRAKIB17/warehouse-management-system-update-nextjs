import { useRouter } from 'next/router';
import React from 'react';
import Rating from '../rating';

const SpecificDescription = ({ product }) => {
    const { DiscountPrice, category, rating, details, imageUrl, supplierName, price, title, quantity, _id, htmlDescription ,min_order_quantity } = product;

    const router = useRouter()
    return (
        <div>
            <div className='p-4'>
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
                        <span className='flex items-center '>
                            Supplier:
                            <p className='pl-2 text-primary'>
                                {supplierName}
                            </p>
                        </span>
                        <div>
                            <Rating rating={rating} />
                        </div>
                    </div>
                    <div className='text-xl flex gap-3 font-bold text-orange-400'>
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
                    <h1
                        className='text-gray-500 cursor-pointer '
                        onClick={() => router.replace('/products?cat=' + category)}
                    >
                        Category:
                        <span className='link-primary link-hover'>
                            {" " + category}
                        </span>
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default SpecificDescription;