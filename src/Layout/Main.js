import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal bg-black">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations!</h3>
                    <p className="py-4">Your order has been placed successfully!</p>
                </div>
            </div>
        </div>
    );
};

export default Main;