import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, location, company, type }) => {
  return (
    <div className="card">
      <header className="card__header">
        <h2 className="card__company">{company}</h2>
        <p className="card__type">{type}</p>
      </header>
      <h3 className="card__title">{title}</h3>
      <footer className="card__footer">
        <img src={image} alt={company}/>
        <p className="card__location">{location}</p>
      </footer>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string
};