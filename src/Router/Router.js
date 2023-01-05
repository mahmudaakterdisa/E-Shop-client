import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import Kids from '../Pages/Categories/Kids/Kids';
import Login from '../Pages/Login/Login';
import Men from '../Pages/Categories/Men/Men';
import Register from '../Pages/Registration/Register';
import Women from '../Pages/Categories/Women/Women';


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
                element: <Cart></Cart>
            },
            {
                path: '/women',
                element: <Women></Women>
            },
            {
                path: '/men',
                element: <Men></Men>
            },
            {
                path: '/kids',
                element: <Kids></Kids>
            },
        ]

    }
]);