import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, location, type, image }) => {
  return (
    <div className="card">
      <header className="card__header">
        <img
          className="card__image"
          src={image}
        />
        <p className="card__type">{type}</p>
      </header>
      <h2 className="card__title">{title}</h2>
      <p className="card__location">{location}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {

};