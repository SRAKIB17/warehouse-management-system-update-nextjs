import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Rating from '../Rating';
import axios from 'axios'

const ManageSpecificDescription = ({ product, refetch }) => {
    const { DiscountPrice, category, rating, details, imageUrl, supplierName, price, title, quantity, _id, htmlDescription } = product;

    const router = useRouter();

 
    const [quantityLast, setLastQuantity] = useState(eval(quantity))
    const [loading, setLoading] = useState(null)
    const restockItemHandle = async (e, method) => {
        setLoading(true)
        let quantity = 0
        switch (method) {
            case "deliver":
                if ('deliver' && quantityLast > 0) {
                    quantity = eval(e.target.deliverQuantity.value - 1)
                }

                else {
                    alert("stock out. could not update it")
                }
                break;

            case "restock":
                quantity = e.target.itemNumber.value;
                break;
            default:
                break;
        }

        setLastQuantity(quantity)
        const quantityBody = {
            quantity: quantity
        }
        const { data } = await axios.put('/api/products/' + _id, quantityBody)
        if (data?.acknowledged) {
            e.target.reset()
            setLoading(null)
            refetch()
        }
        refetch()
        setLoading(null)

    }

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
                        <span className='flex items-center'>
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
                                    {" " + quantityLast}
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
                <div>
                    <div className='flex gap-3'>
                        <form
                            className='flex items-center gap-1'
                            onSubmit={(e) => {
                                e.preventDefault()
                                restockItemHandle(e, 'deliver')
                                e.target.v

                            }}>
                            <input
                                type="number"
                                name='deliverQuantity'
                                required
                                min='0'
                                value={(quantityLast)}
                                className='w-20 sm:input-md input input-primary input-sm hidden'
                            />
                            {
                                loading ?
                                    <span className='btn btn-disabled bg-secondary btn-sm text-white btn-secondary sm:btn-md relative'>
                                        Delivered
                                        <p className='border-b-[3px] border-t-[3px]  absolute animate-spin w-5 rounded-full h-5'>

                                        </p>
                                    </span>
                                    :
                                    <button className='btn btn-sm sm:btn-md text-white btn-secondary '>
                                        Delivered
                                    </button>
                            }
                        </form>


                        <div>
                            <form
                                className='flex items-center gap-1'
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    restockItemHandle(e, "restock")
                                }}>
                                <input
                                    type="number"
                                    name='itemNumber'
                                    required
                                    min='1'
                                    className='w-20 sm:input-md input input-primary input-sm'
                                />
                                {
                                    loading ?
                                        <span className='btn btn-disabled bg-primary btn-sm text-white btn-primary sm:btn-md relative'>
                                            Restock
                                            <p className='border-b-[3px] border-t-[3px]  absolute animate-spin w-5 rounded-full h-5'>

                                            </p>
                                        </span>
                                        :
                                        <button className='btn btn-sm text-white btn-primary sm:btn-md '>
                                            Restock
                                        </button>
                                }
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageSpecificDescription;