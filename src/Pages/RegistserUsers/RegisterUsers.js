import React, { useEffect, useState } from 'react';
import css from './RegisterUsers.css'

const RegisterUsers = () => {
    const [users, setUsers] = useState([])

    console.log(users)
    useEffect(() => {

        fetch(' https://e-shop-server-plum.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='users-container flex flex-col justify-center items-center my-20'>
            <h3 className='text-3xl text-center mb-10'>All Users</h3>
            <div className="overflow-x-auto mt-5 w-2/3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th className='max-[411]:hidden'>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((userinfo, i) => <tr key={userinfo._id}>
                                <th>{i}</th>
                                <td className='max-[411px]:hidden'>{userinfo.name}</td>
                                <td>{userinfo.email}</td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisterUsers;