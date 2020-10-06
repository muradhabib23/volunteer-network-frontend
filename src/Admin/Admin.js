import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Group 1329.png'

const Admin = () => {
    return (
        <div>
            <Link to="/home" className='mb-5'>
             <img style={{ height: '50px' }} className='mt-4' src={logo} alt="" />
         </Link>
        </div>
    );
};

export default Admin;