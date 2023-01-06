import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Registration/Register';
import Allcategories from '../Pages/Categories/Allcategories/Allcategories';
import Privateroute from '../Pages/Privateroute/Privateroute';
import RegisterUsers from '../Pages/RegistserUsers/RegisterUsers';


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <Privateroute><Cart></Cart></Privateroute>
            },


            {
                path: '/allcatagories/:name',
                loader: ({ params }) => fetch(` https://e-shop-server-plum.vercel.app/Categories/${params.name}`),
                element: <Privateroute><Allcategories></Allcategories></Privateroute>
            },

            {
                path: '/users',
                element: <Privateroute><RegisterUsers></RegisterUsers></Privateroute>
            },

            {
                path: '*',
                element: <div className="my-60 mx-96">
                    <img src="https://www.crazydomains.co.nz/help/404-not-found-error-explained/?image_id=2979" alt="" />

                </div>
            }
        ]

    }
]);