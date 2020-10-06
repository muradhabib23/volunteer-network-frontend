import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import brandImg from '../images/Group 1329.png'
import googleIcon from '../images/download.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
    })

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/register" } };

    const handleGoogleLogin = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                };
                handleResponse(signedInUser, true)
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
          history.replace(from);
        }
      }

    return (
        <div>
            <div className="d-flex align-items-center flex-column">
                <Link to="/home" className='mb-5'>
                    <img style={{ height: '50px' }} className='mt-5' src={brandImg} alt="" />
                </Link>
                <div className='login-card-container p-5 d-flex align-items-center'>
                    <div className='login-card'>
                        <button onClick={handleGoogleLogin} className='btn btn-block border rounded-pill px-4'>
                            <div className='d-flex align-items-center justify-content-around'>
                                <div>
                                    <img className='mr-3' style={{ height: '30px' }} src={googleIcon} alt="" />
                                </div>
                                <div>
                                    <p className='m-0'>Continue with Google</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;