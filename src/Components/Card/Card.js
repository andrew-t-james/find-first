import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, location, type, image }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} style={{height: '3rem', width: '3rem'}}/>
      <p>{location}</p>
      <p>{type}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {

};