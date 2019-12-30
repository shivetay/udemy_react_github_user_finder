import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func,
    clearUsers: PropTypes.func,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { searchUsers, setAlert } = this.props;
    const { text } = this.state;
    e.preventDefault();
    if (text === '') {
      setAlert('Enter user', 'light');
    } else {
      //przekazanie wartości 'text' z onsubmit do app.js(rodzica)
      searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { text } = this.state;
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={text}
            onChange={this.onChange}
            placeholder='search users'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
