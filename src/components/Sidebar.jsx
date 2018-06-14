import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = props => (
  <aside>
    <nav id="sidebar" className={props.active ? 'active' : ''}>
      <div className="sidebar-header">
        <h3>Albums</h3>
        <button className="btn btn-primary">
          <i className="glyphicon glyphicon-plus" />
        </button>
      </div>
      <ul className="list-unstyled albums">
        <li className="active">
          <a href="#album1">Album 1</a>
        </li>
        <li>
          <a href="#album2">Album 2</a>
        </li>
        <li>
          <a href="#album3">Album 3</a>
        </li>
        <li>
          <a href="#album4">Album 4</a>
        </li>
      </ul>
    </nav>
  </aside>
);

Sidebar.defaultProps = {
  active: true
};

Sidebar.propTypes = {
  active: PropTypes.bool
};

export default Sidebar;
