import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../../layout/Spinner/Spinner';
import Repos from '../../views/Repos/Repos';

class User extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func,
    getUserRepos: PropTypes.func,
  };
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      user: {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        email,
        hireable,
      },

      loading,
      repos,
    } = this.props;

    let renderHireable = hireable => {
      if (hireable === true) {
        renderHireable = <i className='fas fa-check text-success' />;
      } else {
        renderHireable = <i className='fas fa-times-circle text-danger' />;
      }
      return renderHireable;
    };

    if (loading === true) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Link to='/' className='btn btn-light'>
            {' '}
            Back to search{' '}
          </Link>
          Hireable: {''}
          {renderHireable(hireable)}
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={avatar_url}
                alt='user_avatar'
                className='round-img'
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio && (
                <div>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </div>
              )}
              <a href={html_url} className='btn btn-dark my-1'>
                {name} Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Login</strong>: {login}
                  </li>
                )}
                {email && (
                  <li>
                    <strong>email</strong>: {email}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>blog</strong>: {blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className='card text-center'>
            <div className='badge badge-primary'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-light'>
              Public Repos: {public_repos}
            </div>
          </div>
          <Repos repos={repos} />
        </div>
      );
    }
  }
}

export default User;
