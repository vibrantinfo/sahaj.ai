import React from 'react';
import PropTypes from 'prop-types';
import './StoryCategoryCard.scss';

const StoryCategoryCard = ({ label }) => {
  return (
    <div className="category-card">
      <h3 className="title">
        {label}
      </h3>
    </div>
  );
};

StoryCategoryCard.propTypes = {
  label: PropTypes.string.isRequired
};

export default StoryCategoryCard;