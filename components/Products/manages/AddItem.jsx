
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';




const AddItem = () => {
    const [user] = useAuthState(auth);
    const router = useRouter()

    const onKeyUp = (event) => {
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
        const htmlDescription = event.target.htmlDescription.value;
        const userId = user?.uid;
        const Item = { userId, title, category, price, DiscountPrice, quantity, supplierName, imageUrl, details, htmlDescription }

        // console.log(Item)
        const { data } = await axios.post('/api/products/add', Item)
        if (data?.acknowledged) {
            event.target.reset()
            router.replace('/products/manage')
            setLoading(null)
        }
        setLoading(null)


    }
    return (
        <div className='addItem'>

            <h2 className='text-primary text-2xl p-3'> Add Product</h2>
            <form onSubmit={handleAddItem} onKeyUp={onKeyUp} className="gap-1">
                <div>
                    <img src='/icon/edit/vegetables.png' alt="" />
                    <input placeholder='Item Title' type="text" name="name" id="" required />
                </div>
                <div>
                    <img src='/icon/edit/vegetables.png' alt="" />

                    <input placeholder='Category' type="text" name="category" id="" list="category" required />

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
                    <input placeholder='Price' type="number" name="price" id="" required min='0'/>
                </div>
                <div>
                    <img src='/icon/edit/price.svg' alt="" />
                    <input placeholder='Discount Price' type="number" name="DiscountPrice" id="" min='0'  required />
                </div>
                <div>
                    <img src='/icon/edit/add.svg' alt="" />
                    <input placeholder='Quantity' type="number" name="quantity" id="" required min='0'/>

                </div>

         
                <div>
                    <img src='/icon/edit/courier.png' alt="" />
                    <input placeholder='Supplier Name' type="text" name="supplierName" id="" required />
                </div>

                <div>
                    <img src='/icon/edit/image.svg' alt="" />
                    <input placeholder='Image Url' type="text" name="imageUrl" id="" required />
                </div>

                <div>
                    <img src='/icon/edit/description.png' alt="" />
                    <textarea
                        placeholder='Details'
                        type="text"

                        name="details" id=""
                        required
                        className='w-full'
                    />
                </div>
                <div>
                    <img src='/icon/edit/description.png' alt="" />
                    <textarea
                        className='w-full'
                        placeholder='Description'
                        type="text"

                        name="htmlDescription"
                        id=""
                        required
                    />
                </div>

                {
                    loading ?
                        <span className='btn btn-disabled bg-primary btn-sm text-white btn-primary sm:btn-md relative'>
                            Add
                            <p className='border-b-[3px] border-t-[3px]  absolute animate-spin w-5 rounded-full h-5'>

                            </p>
                        </span>
                        :
                        <button className='btn btn-sm sm:btn-md text-white btn-primary '>
                            Add
                        </button>
                }
            </form>
        </div>
    );
};

export default AddItem;