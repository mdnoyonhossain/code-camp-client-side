import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, userProfileUpdate, googleSignIn, githubSignIn, emailvefify } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                userUpdateProfile(name, photoUrl);
                console.log(user);
                toast.success('Registon Successfull');
                emailvefifyUser();    
                toast.error('Plese Check Your Email. Verification Link Already Send.')      
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    const userUpdateProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        userProfileUpdate(profile)
            .then(() => { })
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

    const githubSignInPopup = () => {
        githubSignIn()
            .then(result => {
                console.log(result);
                toast.success('Github SignIn Successfull');
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    const emailvefifyUser = () => {
        emailvefify()
        .then(() => {})
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
                                    <h1 className="mb-1 fw-bold">Register</h1>
                                    <span>Already have an account? <Link to="/login" className="ms-1">Login</Link></span>
                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">User Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Full Name" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Photo URL</label>
                                        <input type="text" className="form-control" name="photoUrl" placeholder="Photo URL" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" name="email" placeholder="Email address here" required/>
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

export default Register;