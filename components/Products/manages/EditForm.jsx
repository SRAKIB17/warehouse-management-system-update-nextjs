
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';




const EditProduct = ({ editProduct, setEditProduct, refetch }) => {
    const [user] = useAuthState(auth);
    console.log()
    const [item, setItem] = useState(editProduct);
    useEffect(() => {
        setItem(editProduct)
    }, [editProduct])
    const onKeyUp = (event) => {
        setItem({})
    }

    const [loading, setLoading] = useState(null)

    const handleAddItem = async (event) => {
        setLoading(true)
        event.preventDefault()
        const title = event.target.name.value;
        const category = event.target.category.value;
        const price = event.target.price.value;
        const DiscountPrice = event.target.DiscountPrice.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const imageUrl = event.target.imageUrl.value;
        const details = event.target.details.value;
        const userId = user?.uid;
        const Item = { userId, title, category, price, DiscountPrice, quantity, supplierName, imageUrl, details }


        const { data } = await axios.put('/api/products/' + editProduct?._id, Item)
        setEditProduct(null);

        if (data?.acknowledged) {
            refetch()
            setEditProduct(null)
            event.target.reset()
            setLoading(null)
        }
        setEditProduct(null);
        refetch()
        setLoading(null)


    }
    return (
        <div className='addItem'>

            <h2 className='text-primary text-xl'> Update Item</h2>
            <form onSubmit={handleAddItem} onKeyUp={onKeyUp} className="gap-1">
                <div>
                    <img src='/icon/edit/vegetables.png' alt="" />
                    <input placeholder='Item Title' type="text" name="name" id="" value={item?.title} required />
                </div>
                <div>
                    <img src='/icon/edit/vegetables.png' alt="" />

                    <input placeholder='Category' type="text" name="category" id="" value={item?.category} list="category" required />

                    <datalist id="category">
                        <option value="Fruits" />
                        <option value="Vegetables" />
                        <option value="Canned Goods" />
                        <option value="Frozen Foods" />
                        <option value="Fish and shellfish" />
                        <option value="Condiments and Spices" />
                        <option value="Sauces and Oils " />
                        <option value="Snacks" />
                        <option value="Bread and Bakery" />
                        <option value="Beverages" />
                        <option value="Pasta/Rice" />
                        <option value="Cereal" />
                        <option value="Health Care" />
                        <option value="Personal Care" />
                        <option value="Paper and Wrap" />
                        <option value="Household Supplies" />
                        <option value="Baby Items" />
                        <option value="Other items" />
                    </datalist>
                </div>
                <div>
                    <img src='/icon/edit/price.svg' alt="" />
                    <input placeholder='Price' type="text" value={item?.price} name="price" id="" required />
                </div>
                <div>
                    <img src='/icon/edit/price.svg' alt="" />
                    <input placeholder='Discount Price' type="text" value={item?.DiscountPrice} name="DiscountPrice" id="" required />
                </div>
                <div>
                    <img src='/icon/edit/add.svg' alt="" />
                    <input placeholder='Quantity' type="text" value={item?.quantity} name="quantity" id="" required />

                </div>
                <div>
                    <img src='/icon/edit/courier.png' alt="" />
                    <input placeholder='Supplier Name' type="text" value={item?.supplierName} name="supplierName" id="" required />
                </div>
                <div>
                    <img src='/icon/edit/image.svg' alt="" />
                    <input placeholder='Image Url' type="text" value={item?.imageUrl} name="imageUrl" id="" required />
                </div>
                <div>
                    <img src='/icon/edit/description.png' alt="" />
                    <input placeholder='Details' type="text" value={item?.details} name="details" id="" required />
                </div>

                {
                    loading ?
                        <span className='btn btn-disabled bg-primary btn-sm text-white btn-primary sm:btn-md relative'>
                            Update
                            <p className='border-b-[3px] border-t-[3px]  absolute animate-spin w-5 rounded-full h-5'>

                            </p>
                        </span>
                        :
                        <button className='btn btn-sm sm:btn-md text-white btn-primary '>
                            Update
                        </button>
                }
            </form>
        </div>
    );
};

export default EditProduct;