import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './firebase.init';
import './Login.css'

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState({
        email: "", password: "", confirmPass: ""
    })
    const [error, setError] = useState({
        email: "", password: ""
    })
    const handleEmailLogIn = (e) => {
        const emailReg = /\S+@\S+\.\S+/;
        const validEmail = emailReg.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: "" });
        } else {
            setError({ ...error, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePasswordLogIn = (e) => {
        const passwordReg = /.{6,}/;
        const validPassword = passwordReg.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Sent email');
        }
        else {
            toast.error('please enter your email address');
        }
    }
    const [user1] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1) {
            navigate(from);
        }
    }, [user1]);

    return (
        <div className='form-container'>
            <div className="">

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleEmailLogIn} type="email" name="email" required />
                        {
                            error?.email && <p>{error.email}</p>
                        }

                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onChange={handlePasswordLogIn} type="password" name="password" required />
                        {
                            error?.password && <p>{error.password}</p>
                        }
                    </div>

                    <div className="submit">
                        <input className="form-submit" type="submit" value="Login" />
                    </div>
                </form>
                <button onClick={resetPassword}>Forget password?</button>
                <button onClick={() => signInWithGoogle()}>continue with google</button>
                <p className='text'>
                    New to CareTutor? <Link className='form-link' to='/signup'>Create an Account</Link>
                </p>

            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;