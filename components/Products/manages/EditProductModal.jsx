/* eslint-disable @next/next/no-img-element */
import React from 'react';
import EditProduct from './EditForm';

const EditProductModal = ({ editProduct, setEditProduct, refetch }) => {
    return (
        <div>
            <div className='z-[1000] w-full h-full'>

                <input type="checkbox" id="editProductManage" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle z-[1000]">
                    <div className="modal-box">

                        <p className="py-4 text-xl text-green-500 font-extrabold flex gap-1 items-center">
                            <img src={editProduct?.imageUrl} alt="" className='h-6 w-6' />
                            {
                                editProduct?.title
                            }
                        </p>
                        <label
                            htmlFor="editProductManage" className="btn btn-sm btn-circle absolute right-2 top-2 btn-warning text-white "
                            onClick={() => setEditProduct(null)}
                        >
                            x
                        </label>

                        <div>
                            <EditProduct
                                editProduct={editProduct}
                                setEditProduct={setEditProduct}
                                refetch={refetch}
                            />
                        </div>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default EditProductModal;