import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../Login/firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CareTutor</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink to='/' className="nav-item text-decoration-none me-4 text-dark" >
                                Home
                            </NavLink>
                            <NavLink to='/blog' className="nav-item text-decoration-none me-4 text-dark">
                                Blog
                            </NavLink>
                            <NavLink to='/about' className="nav-item text-decoration-none me-4 text-dark">
                                About Me
                            </NavLink>
                            {
                                user ?

                                    <button onClick={() => signOut(auth)} className='btn btn-primary'>SignOut</button>

                                    :
                                    <NavLink to='/login' className="nav-item text-decoration-none me-4 text-dark">
                                        LogIn
                                    </NavLink>}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;