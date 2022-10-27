import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { userSignIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login Successfull');
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })

    }

    const googleSignInPopup = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                toast.success('Google SignIn Successfull')
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    

    return (
        <div className='my-4'>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center g-0 min-vh-100">

                    <div className="col-lg-5 col-md-8 py-8 py-xl-0">

                        <div className="card shadow ">

                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <a href="../index.html"><img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="" /></a>
                                    <h1 className="mb-1 fw-bold">Login</h1>
                                    <span>Don’t have an account? <Link to="/register" className="ms-1">Register</Link></span>
                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" name="email" placeholder="Email address here" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="**************" required />
                                    </div>

                                    <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label ">Remember me</label>
                                        </div>
                                    </div>
                                    <div>

                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary ">Register</button>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                </form>
                                <div className="mt-4 text-center">
                                    <button onClick={googleSignInPopup} className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#dd4b39' }} ><FaGoogle /> Continue with Google</button>
                                    <button onClick={githubSignInPopup} className="btn btn-lg btn-block btn-primary mb-2 bg-dark" ><FaGithub /> Continue with GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;