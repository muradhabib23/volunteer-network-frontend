
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AllEventContext, SelectedEventContext, UserContext } from '../App';
import logo from '../images/Group 1329.png'
import ListedEvent from '../ListedEvent/ListedEvent';

const RegisteredEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allEvents, setAllEvents] = useContext(AllEventContext);

    useEffect(() => {
        fetch('http://localhost:5000/eventWorks?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setAllEvents(data))
    }, [])

    return (
        <div className="d-flex align-items-center flex-column" >
        <Link to="/home" className='mb-5'>
             <img style={{ height: '50px' }} className='mt-4' src={logo} alt="" />
         </Link>
         
            {
                allEvents.map(event=> <ListedEvent totalEvents={event}/>)
            }


        </div>
        
    );
};

export default RegisteredEvent;