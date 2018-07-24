import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, location, type }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{location}</p>
      <p>{type}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {

};