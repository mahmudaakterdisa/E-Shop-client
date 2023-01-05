import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import OrderedItems from './OrderedItems/OrderedItems';
import css from './Cart.css'


const Cart = () => {
    const { user } = useContext(Authcontext);

    const [orders, setOrders] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/ShoppingCart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    let temp = 0;
    for (const count of orders) {
        temp = temp + count.productPrice
    }

    //place your order

    const placeOrder = () => {
        alert('done')
    }
    //Delete Items

    const handledelete = (id) => {
        const proceed = window.confirm('do you wants to delete your Items?');
        if (proceed) {
            fetch(`http://localhost:5000/ShoppingCart/${id}`, {
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
        <div className='cart-container flex flex-row justify-evenly py-20'>
            <div className='grid grid-cols-2 gap-10  order-container'>
                {
                    orders.map(order => <OrderedItems key={order._id} order={order} handledelete={handledelete}></OrderedItems>)
                }
            </div>
            <div className=' bg-slate-400 payment-container py-32 px-10'>
                <div className='flex justify-between items-center border border-slate-900 mb-10 px-3' >
                    <div>
                        <p>Total Items:</p>
                    </div>
                    <div>
                        {orders.length}
                    </div>
                </div>
                <div className='flex justify-between items-center border border-slate-900 mb-10 px-3'>
                    <div>
                        <p>Total amount:</p>
                    </div>
                    <div>
                        <p>{temp}</p>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <button onClick={placeOrder} className="btn btn-primary">Place your order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;