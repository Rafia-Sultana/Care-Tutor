import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog">

            <div className="card p-4 shadow">
                <h5 className='qus-color'>Difference between authorization and authentication</h5>
                <p><span className='fw-bold'>Answer:</span>Authentication is the process of validating users who they claim to be.Most common factor is to identify the password.
                    Authorization happens after user identity is successfully authenticated. Authorization gives the ability to access user data in  the system .
                    Example: Employee gives the information in login details to authenticate themselves to access the organizational emails or software.After successfull authentication,they can access and work on certain functions only as per their roles and profiles.
                </p>
            </div>


            <div className="card p-4 shadow">
                <h5 className='qus-color'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p><span className='fw-bold'>Answer:</span> Firebase is a service provided by Google. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc. It helps us build and run successful apps.
                    Here are alternative of firebase:
                    <ul>
                        <li>  Cookie-Based authentication</li> <br />
                        <li>  Token-Based authentication </li><br />
                        <li> Third party access(OAuth, API-token)</li> <br />
                        <li>  OpenId</li> <br />
                        <li> SAML</li>
                    </ul>
                </p>
            </div>
            <div className="card p-4 shadow">
                <h5 className='qus-color'>What other services does firebase provide other than authentication</h5>
                <p> <span className='fw-bold'>Answer:</span> Firebase provides other services also. Such as--
                    <pre>
                        Cloud Firestore.<br />
                        Cloud Functions.<br />
                        Authentication.<br />
                        Hosting.<br />
                        Cloud Storage.<br />
                        Google Analytics.<br />
                        Predictions.<br />
                        Cloud Messaging.
                    </pre>
                </p>
            </div>
        </div>
    );
};

export default Blog;