import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/Group 1329.png'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        setLoggedInUser({
            isSignedIn: false,
            name: '',
            email: '',
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light pt-3 container">
                <Link to='/home' className="navbar-brand">
                    <img style={{height: "40px"}} src={logo} alt="logo"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3">
                            <Link to='/home' className="nav-link normal-nav-link">Home</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/donation' className="nav-link normal-nav-link">Donation</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/registeredEvents' className="nav-link normal-nav-link">Events</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/blog' className="nav-link normal-nav-link">Blog</Link>
                        </li>
                        <li className="nav-item ml-3">
                            {<Link onClick={handleSignOut} to='/register' className="nav-link btn btn-primary text-white px-3">{loggedInUser.email || loggedInUser.name ? `${loggedInUser.name}/Logout` : 'Register'}</Link>}
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/admin' className="nav-link btn btn-dark text-white px-3">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;