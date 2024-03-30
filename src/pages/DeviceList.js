import React from 'react'
import {Link, useNavigate} from "react-router-dom";

const DeviceList = ({ devices }) => {
    return (
        <div className="device-list">
            <Link to={'/'}>
                <button className='device-button position-fixed-left-0'>Home</button>
            </Link>
            <Link to={'/myProjects'}>
                <button className='device-button position-fixed-right-0'>my other Projects</button>
            </Link>
            <h2>Select a Device:</h2>
            {devices.map((device, index) => (
                <DeviceButton key={index} device={device} index={index}/>
            ))}
        </div>
    );
};

const DeviceButton = ({device, index }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/device/${index}`);
    };

    return (
        <button onClick={handleButtonClick} className="device-button">
            {device.name}
        </button>
    );
};

export default DeviceList

