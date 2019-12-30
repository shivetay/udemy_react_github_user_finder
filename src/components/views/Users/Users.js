import React from 'react';
import PropTypes from 'prop-types';

import UserItem from '../UserItem/UserItem';
import Spinner from '../../layout/Spinner/Spinner';

const Users = props => {
  const { users, loading } = props;

  if (loading === true) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default Users;
