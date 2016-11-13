import React, { Component } from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();

		GitHubUser.getUserInfo(this.refs.username.value).then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

		GitHubUser.getUserRepos(this.refs.username.value).then(function(response) {
      this.props.updateRepos(response.data);
    }.bind(this));
	}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <h1 className="title">GitHub User Search</h1>
          <input className="input" type="text" ref="username" placeholder="Enter username" />
          <button className="button">Search</button>
        </form>
      </div>
    )
  }
};

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
}

export default SearchUser;
