import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import OrderedItems from './OrderedItems/OrderedItems';
import css from './Cart.css'


const Cart = () => {
    const { user, logout } = useContext(Authcontext);

    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {

        fetch(` https://e-shop-server-plum.vercel.app/ShoppingCart?email=${user?.email}`, {

            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    let temp = 0;
    for (const count of orders) {
        temp = temp + count.productPrice
    }
    //Delete Items

    const handledelete = (id) => {
        const proceed = window.confirm('do you wants to delete your Items?');
        if (proceed) {
            fetch(` https://e-shop-server-plum.vercel.app/ShoppingCart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(eachOrder => eachOrder._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    return (
        <div className='cart-container flex max-sm:flex-col mx-auto sm:flex-row justify-evenly max-sm:justify-center max-sm:items-center py-20'>
            <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-10  order-container 5/12'>
                {
                    orders.map(order => <OrderedItems key={order._id} order={order} handledelete={handledelete}></OrderedItems>)
                }
            </div>
            <div className='payment-container w-5/12 p-10 border-2 border-black shadow-sm max-sm:w-4/6 max-sm:mt-10'>
                <div className=' h-2/6 flex flex-wrap justify-between items-center border border-slate-900 mb-10 px-3 font-semibold text-2xl' >
                    <div>
                        <p>Total Items:</p>
                    </div>
                    <div>
                        {orders.length}
                    </div>
                </div>
                <div className='h-2/6  flex flex-wrap justify-between items-center border border-slate-900 mb-4 px-3 font-semibold text-2xl'>
                    <div>
                        <p>Total amount:</p>
                    </div>
                    <div>
                        <p>{temp}</p>
                    </div>
                </div>
                <div className=" flex justify-center items-center w-full">
                    <button className="btn btn-primary w-full font-semibold">
                        <label htmlFor="my-modal-3">Order Now</label></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;