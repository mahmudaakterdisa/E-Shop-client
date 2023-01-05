import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Authprovider/Authprovider';
import css from './AvailableProducts.css'

const AvailableProducts = ({ allcollection }) => {
    const { user } = useContext(Authcontext)
    console.log(user.email)

    const { product_name, product_image, product_price } = allcollection;

    const handlePostDetails = () => {
        const cart = {
            productName: product_name,
            productImage: product_image,
            productPrice: product_price,
            email: user.email

        }

        fetch('http://localhost:5000/ShoppingCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // toast('Hello World');
                    alert('Added')


                }

            })
    }
    return (
        <div className="card w-4/6 card-compact bg-base-100 shadow-xl">
            <figure><img className=' h-52 w-full' src={product_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>Price:{product_price}$</p>
                <div className="card-actions justify-end">
                    <button onClick={handlePostDetails} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AvailableProducts;