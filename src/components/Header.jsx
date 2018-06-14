import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../logo.png';

const Header = props => (
  <header>
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#brand">
            <img alt="Brand" src={logo} width="40" height="40" />&nbsp;&nbsp;Photo Album
          </a>
          <button type="button" className="btn navbar-btn" onClick={props.toggleSidebar}>
            <i className="glyphicon glyphicon-menu-hamburger" />
          </button>
        </div>
      </div>
    </nav>
  </header>
);

Header.defaultProps = {
  toggleSidebar: () => {}
};

Header.propTypes = {
  toggleSidebar: PropTypes.func
};

export default Header;
