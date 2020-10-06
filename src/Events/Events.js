import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectedEventContext } from '../App';

const Events = (props) => {
    const [selectEvent, setSelectEvent] = useContext(SelectedEventContext);
    const { name, img } = props.event;
    const color = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
    const randomColor = Math.floor(Math.random() * (4 - 0) + 0);

    let history = useHistory()
    const handleEvent = (selectEvent) => {
        history.push('/register');
        setSelectEvent(props.event);
    }
    return (
        <div  style={{ marginTop: "80px" }} className="col-md-3 col-sm-4 col-10">
        <div className="card-deck mb-3">
            <div className="card">
                <Link onClick={() => handleEvent(name)} style={{textDecoration:'none'}}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div style={{backgroundColor:`${color[randomColor]}`, borderRadius: '10px', padding: '15px'}} className="card-body">
                        <h5 className="card-title text-center text-white mb-0">{name}</h5>
                    </div>
                </Link>
            </div>
        </div>

    </div>
    );
};

export default Events;