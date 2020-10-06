import { Card, Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { SelectedEventContext, UserContext } from '../App';
import logo from '../images/Group 1329.png'
import { useForm } from 'react-hook-form';

const Register = () => {
    const [selectEvent, setSelectEvent] = useContext(SelectedEventContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const photo = 'https://i.ibb.co/dfhNSBt/extra-Volunteer.png'
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-meadow-72554.herokuapp.com/registeredEvents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...data, photo})
        })
        .then(res => res.json())
        .then(result => {
            history.push('/registeredEvents/' + loggedInUser.name)
        })

    }

    return (
        <div className="d-flex align-items-center flex-column" >
           <Link to="/home" className='mb-5'>
                <img style={{ height: '50px' }} className='mt-4' src={logo} alt="" />
            </Link>
            <Card className="mt-4" style={{ width: '400px',padding: '20px' }}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}} >Register as a volunteer</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail" className="mt-4">
                            <Form.Control name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} className="rounded-0 border-top-0 border-left-0 border-right-0 border-bottom-1" type="text" placeholder="Full name" />
                            {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mt-4">
                            <Form.Control name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} className="rounded-0 border-top-0 border-left-0 border-right-0 border-bottom-1" type="email" placeholder="Email or Username" />
                            {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mt-4">
                            <Form.Control name="date" ref={register({ required: true })} className="rounded-0 border-top-0 border-left-0 border-right-0 border-bottom-1" type="date" placeholder="Date" />
                            {errors.date && <span style={{ color: 'red' }}>Date is required</span>}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mt-4">
                            <Form.Control name="description" ref={register({ required: true })} className="rounded-0 border-top-0 border-left-0 border-right-0 border-bottom-1" type="text" placeholder="Description" />
                            {errors.description && <span style={{ color: 'red' }}>Email is required</span>}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mt-4">
                            <Form.Control name="eventName" ref={register({ required: true })} defaultValue={selectEvent.name} className="rounded-0 border-top-0 border-left-0 border-right-0 border-bottom-1" type="text" placeholder="Event Name" />
                            {errors.volunteerName && <span style={{ color: 'red' }}>Email is required</span>}
                        </Form.Group>
                        <Form.Group className="mt-4">
                            <Form.Control type="submit" className="btn btn-primary rounded-0" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;