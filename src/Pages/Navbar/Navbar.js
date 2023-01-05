import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';
import { GiShoppingCart } from "react-icons/gi";
import Categoriesli from './Categoriesli';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);

    const [womenCollection, setWomenCollection] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/Categories')
            .then(res => res.json())
            .then(data => setWomenCollection(data))
    }, [])


    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar text-black" style={{ backgroundColor: '#F1F6F9' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-white">

                                {
                                    womenCollection.map(categoriesname => <Categoriesli key={categoriesname._id} categoriesname={categoriesname}></Categoriesli>)
                                }
                            </ul>
                        </li>
                        <li>
                            {
                                user?.uid ?
                                    <>




                                        <li onClick={handlelogout}>Logout</li>



                                    </>
                                    :
                                    <>
                                        <Link to='/register' className='me-3'>
                                            <li>Register</li>
                                        </Link>
                                        <Link to='/login'>
                                            <li>LogIn</li>
                                        </Link>
                                    </>
                            }
                        </li>
                        <li>
                            <Link to='/cart'>
                                <GiShoppingCart size={40} color='#FF7052'></GiShoppingCart>
                            </Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className=' h-12' src="https://i.ibb.co/1qtLfVm/Frame-46.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Categories
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-white">
                            {
                                womenCollection.map(categoriesname => <Categoriesli key={categoriesname._id} categoriesname={categoriesname}></Categoriesli>)
                            }
                        </ul>
                    </li>
                    <li>
                        {
                            user?.uid ?
                                <>




                                    <li onClick={handlelogout}>Logout</li>



                                </>
                                :
                                <>
                                    <Link to='/register' className='me-3'>
                                        <li>Register</li>
                                    </Link>
                                    <Link to='/login'>
                                        <li>LogIn</li>
                                    </Link>
                                </>
                        }
                    </li>
                    <li>
                        <Link to='/cart'>
                            <GiShoppingCart size={40} color='#FF7052'></GiShoppingCart>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;