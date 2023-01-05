import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';

const Register = () => {
    const { createUser, updateUser } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    // useTitle('Register')

    const handlesubmitform = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');

                const userInfo = {
                    displayName: username
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(username, email);
                    })
                    .catch(err => console.log(err));


            })

            .catch(error => console.error(error))

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesubmitform} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full-Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='username' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;