import React, { useState } from 'react';
import fakeData from '../fakeData';
import Events from '../Events/Events';

const Home = () => {
    const [events] = useState(fakeData)

    return (
        <div className='home-banner container'>
        <div className='d-flex justify-content-center'>
            <div  style={{ marginTop: "80px" }} className='banner-text'>
                <h1  style={{ fontSize: "40px" }} className='text-center mt-5 mt-sm-0 pt-sm-0 mt-md-0 pt-md-0 pt-5'>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                    <input style={{ width: "300px" }} className="form-control mt-3 col-7" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary mt-3 search px-4" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div className='row d-flex justify-content-center  mt-5 mt-sm-0 pt-sm-0 mt-md-0 pt-md-0 pt-5'>
                {events.map(event => <Events event={event} key={event.id}/>)}
            </div>
        </div>
    );
};

export default Home;