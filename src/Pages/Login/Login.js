import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';


const Login = () => {
    const [errortext, setErrortext] = useState('');
    const { providerLogin } = useContext(Authcontext);
    const { signIn } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    // useTitle('Login');

    const from = location.state?.from?.pathname || '/'

    //function is for login
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setErrortext('');


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // get jwt token
                fetch(' https://e-shop-server-plum.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    });


            })
            .catch(error => {

                console.error(error)
                setErrortext(error.message);
            })
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">{errortext}</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover"> To Create new a account </Link>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;