import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div>
      <div className='card text-center'>
        <h2>{login} </h2>
        <img src={avatar_url} alt='user_image' className='round-img user-img' />
        <div>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
            Check GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
