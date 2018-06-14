import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <div className="item">
    <img alt="" src={props.src} />
  </div>
);

Photo.propTypes = {
  src: PropTypes.string.isRequired
};

export default Photo;
