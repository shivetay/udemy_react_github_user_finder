import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { settings } from '../../../data/DataStore';

const Navbar = props => {
  const { title, icon } = props;
  return (
    <nav className='navbar bg-primary'>
      <h2>
        <i className={icon} />
        {title}
      </h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: settings.navbarDefault.title,
  icon: settings.navbarDefault.icon,
};

export default Navbar;
