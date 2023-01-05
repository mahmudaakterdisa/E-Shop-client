import React from 'react';

const OrderedItems = ({ order, handledelete }) => {
    const { productName, productImage, productPrice, _id } = order
    return (
        <div className="card w-5/6 card-compact bg-base-100 shadow-xl">
            <figure><img className=' h-52 w-full' src={productImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Price:{productPrice}$</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handledelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default OrderedItems;