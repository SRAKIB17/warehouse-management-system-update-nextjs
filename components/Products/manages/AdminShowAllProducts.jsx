import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Common/Loading';
import Pagination from '../../hooks/client/Pagination';
import Junk_empty_delete_trash_remove_bin from '../../LogoSvg/Junk_empty_delete_trash_remove_bin';
import Edit_64x64 from '../../LogoSvg/Edit_64x64';
import DeleteProduct from './DeleteProduct';
import EditProductModal from './EditProductModal';

const AdminAllShowProduct = () => {
    const router = useRouter()
    const { page, showP, search } = router?.query || ' '
    const [getPage, setPage] = useState(1);
    const [show, setShow] = useState(8);
    const [lastPage, setLastPage] = useState(2);

    const [user, loading, error] = useAuthState(auth);

    const { data, isLoading, refetch } = useQuery(['adminProduct', user, search, show, getPage], () => axios.get(`/api/products/manages-products?email=${user?.email}&search=${search}&show=${show}&page=${getPage}`, {
        headers: {
            token: localStorage.getItem('token')
        }
    }))

    const count = data?.data?.count
    const products = data?.data?.result



    useEffect(() => {
        if (page) {
            pageHandle(page)
            setPage(eval(page))
        }
    }, [page])



    useEffect(() => {
        if (showP) {
            setShow(eval(showP))
        }
    }, [showP])

    useEffect(() => {
        const divided = Math.ceil(count / show);
        setLastPage(divided);
    }, [count, show])


    const pageHandle = (jump) => {
        router.query.page = jump;
        setPage(eval(jump))
        router.push(router)
    }


    // FOR DELETE PRODUCT
    const [deleteProduct, setDeleteProduct] = useState(null)
    const [editProduct, setEditProduct] = useState(null)
    return (
        <div>
            {
                isLoading ?
                    <div className='relative flex justify-center items-center top-20
                    '>
                        <div className='absolute flex justify-center items-center w-full z-10 mt-10'>
                            <div className=' w-40 h-40 rounded-full border-b-4 animate-spin border-pink-600  '>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='min-h-full'>
                        <div>
                            <Pagination
                                lastPage={lastPage}
                                page={getPage}
                                pageHandle={pageHandle}
                            />
                        </div>
                        <div className="overflow-auto w-full h-[30rem]">
                            <table className="table w-full table-zebra">
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                        <th>Product</th>
                                        <th>Supplier</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products?.map((product, index) =>
                                            <ShowTable key={index} product={product} setDeleteProduct={setDeleteProduct}
                                                setEditProduct={setEditProduct}
                                            />
                                        )
                                    }
                                </tbody>
                                {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                            </table>
                            {
                                deleteProduct &&
                                <DeleteProduct refetch={refetch}
                                    deleteProduct={{ deleteProduct, setDeleteProduct }}
                                />
                            }
                            {
                                editProduct &&
                                <EditProductModal
                                    editProduct={editProduct}
                                    setEditProduct={setDeleteProduct}
                                    refetch={refetch}
                                />
                            }
                        </div>
                        <div>
                            <Pagination
                                lastPage={lastPage}
                                page={getPage}
                                pageHandle={pageHandle}
                            />
                        </div>
                    </div>
            }

        </div>
    );
};

export default AdminAllShowProduct;








const ShowTable = ({ product, setDeleteProduct, setEditProduct }) => {
    const router = useRouter()
    const { DiscountPrice, price, details, imageUrl, quantity, rating, supplierName, title, category } = product

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox checkbox-secondary" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageUrl} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div
                            className="text-sm opacity-50 link-hover cursor-pointer link-primary"
                            onClick={() => {
                                router.replace('?search=' + category)
                            }}
                        >{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm link-primary link-hover"
                    onClick={() => {
                        router.replace('?search=' + supplierName)
                    }}
                >
                    {supplierName}
                </span>
            </td>
            <td>
                <div className=' flex gap-3 font-bold text-orange-500'>
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
            </td>
            <td>
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
            </td>
            <th>

                <label
                    htmlFor="editProductManage"
                    className="btn btn-ghost btn-xs"
                    onClick={() => setEditProduct({ ...product })}
                >
                    <Edit_64x64 size='20' />
                </label>

                <label
                    htmlFor="deleteSpecificProduct"
                    className="btn btn-ghost btn-xs"
                    onClick={() => setDeleteProduct({ title: title, id: product?._id })}
                >
                    <Junk_empty_delete_trash_remove_bin size='20' />

                </label>

            </th>
        </tr >
    )
}