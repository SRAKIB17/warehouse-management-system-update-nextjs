import axios from 'axios';
import React, { useState } from 'react';

const DeleteProduct = ({ deleteProduct: { deleteProduct, setDeleteProduct }, refetch }) => {
    const [deleteLoading, setDeleteLoading] = useState(null)

    const deleteHandleProduct = async () => {
        setDeleteLoading(true)
        const { data } = await axios.put('/api/products/' + deleteProduct?.id)

        if (data?.acknowledged) {
            refetch()
            setDeleteProduct(null)
            setDeleteLoading(null)
        }
        setEditProduct(null);
        refetch()
        setDeleteLoading(null)
    }
    return (
        <div className='z-[1000] w-full h-full'>

            <input type="checkbox" id="deleteSpecificProduct" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle z-[1000]">
                <div className="modal-box">

                    <p className="py-4 text-xl text-red-500 font-extrabold">
                        Are you sure? Delete {deleteProduct?.title}
                    </p>
                    <div className="modal-action">
                        {
                            deleteLoading ?
                                <span className='btn btn-disabled bg-red-500 text-white relative'>
                                    Delete
                                    <p className='border-b-[3px] border-t-[3px]  absolute animate-spin w-5 rounded-full h-5'>

                                    </p>
                                </span>
                                :
                                <button
                                    className='btn bg-red-700 hover:bg-red-500 text-white'
                                    onClick={deleteHandleProduct}
                                >
                                    Delete
                                </button>
                        }

                        <label
                            htmlFor="deleteSpecificProduct" className="btn btn-success text-white"
                            onClick={() => setDeleteProduct(null)}
                        >
                            cancel
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProduct;