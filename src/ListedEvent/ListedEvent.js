import React, { useContext} from 'react';
import { AllEventContext, UserContext } from '../App';

const ListedEvent = ({ totalEvents }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allEvents, setAllEvents] = useContext(AllEventContext);
    console.log(totalEvents)
    const eventWorks = () => {

        fetch('https://boiling-meadow-72554.herokuapp.com/eventWorks?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data =>{
                setAllEvents(data)
                console.log(data)
            })
    }
    const deleteEvent = (id) => {
        fetch(`https://boiling-meadow-72554.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    eventWorks()
                }
            })
    }

    return (
        <div className='col-md-6 d-flex justify-content-center'>
        <div className='d-flex mb-3 justify-content-between ml-3 bg-light border rounded p-4'>
            <div><img style={{ height: '50px' }} src={totalEvents.photo} alt="alterImage"/></div>
            <div className='mr-2'>
                <h6>{totalEvents.eventName}</h6>
                <p className="font-weight-bold">{totalEvents.date}</p>
            </div>
            <div className='align-self-end'>
                <button onClick={() => deleteEvent(`${totalEvents._id}`)} className='btn btn-secondary'>Cancel</button>
            </div>
        </div>
    </div>
    );
};

export default ListedEvent;