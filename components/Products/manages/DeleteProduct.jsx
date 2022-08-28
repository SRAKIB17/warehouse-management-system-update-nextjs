import React from 'react';

const DeleteProduct = ({ deleteProduct: { deleteProduct, setDeleteProduct } }) => {
    console.log(deleteProduct)
    return (
        <div className='z-[1000] w-full h-full'>

            <input type="checkbox" id="deleteSpecificProduct" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle z-[1000]">
                <div className="modal-box">
                 
                    <p className="py-4 text-xl text-red-500 font-extrabold">
                        Are you sure? Delete {deleteProduct?.title}
                    </p>
                    <div className="modal-action">
                        <label
                            className="btn bg-red-700 hover:bg-red-500 text-white"
                            onClick={() => setDeleteProduct(null)}
                        >
                            Delete
                        </label>
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