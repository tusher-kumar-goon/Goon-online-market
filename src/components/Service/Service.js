import React from 'react';

const Service = (props) => {
    const { name, price, img, seats } = props.service;
    const serviceStyle = {
        border: '4px solid blue',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={serviceStyle}>
            <img className="w-50 h-50" src={img} alt="" />
            <h2>Course name :{name}</h2>
            <h4>price:{price}</h4>
            <p><small>Available Seats:{seats}</small></p>

        </div>
    );
};

export default Service;
