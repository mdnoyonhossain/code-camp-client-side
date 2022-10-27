import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const signOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    return (
        <div>
            <header id="header" className="">
                <div className="container d-flex align-items-center">

                    <h1 className="logo logo-mobile me-auto"><Link to='/'>CodeCamp</Link></h1>
                    {/* <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to="/home" href="/">Home</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li className='me-2'><Link to="/blog">Blog</Link></li>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </ul>

                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {
                        user?.email ?
                            <>
                                <span className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                        {/* <img src={user?.photoURL} alt="" /> */}
                                        {
                                            user.photoURL ?
                                                <img src={user?.photoURL} className="mx-3" style={{ height: '50px', width: '50px', borderRadius: '50%', border: '1px solid black' }} alt="" />
                                                :
                                                <img className="mx-3" src='https://cdn3.vectorstock.com/i/1000x1000/40/52/man-face-cartoon-vector-15374052.jpg' style={{ height: '50px', width: '50px', borderRadius: '50%', border: '1px solid black' }} alt="" />
                                        }
                                    </Link>

                                    <ul className="dropdown-menu">

                                        <li><a className="dropdown-item" href="#">{user?.displayName}</a></li>
                                    </ul>
                                </span>
                                <Link onClick={signOut} to="/login" className="get-started-btn">LogOut</Link>
                            </>
                            :
                            <>
                                <Link to="/login" className="get-started-btn">Login</Link>
                            </>
                    }
                </div>
            </header>
            
        </div>
    );
};

export default Header;