import {Link, useParams} from "react-router-dom";
import React from "react";

const DeviceDetails = ({ devices }) => {
    const { id } = useParams();
    const device = devices[id];
    return (
        <div className="details-container">
            <Link to={'/'}>
                <button className='device-button position-fixed-left-0'>Home</button>
            </Link>
            <Link to={'/myProjects'}>
                <button className='device-button position-fixed-right-0'>my other Projects</button>
            </Link>
            <h2>{device.name}</h2>
            <p>{device.description}</p>
        </div>
    );
};

export default DeviceDetails
