import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = props => (
  <nav id="sidebar" className={props.active ? 'active' : ''}>
    <div className="sidebar-header">
      <h3>Albums</h3>
    </div>
    <ul className="list-unstyled albums">
      <li className="active">
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

Sidebar.defaultProps = {
  active: true
};

Sidebar.propTypes = {
  active: PropTypes.bool
};

export default Sidebar;
