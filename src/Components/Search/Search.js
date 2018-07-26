import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.props.filterJobs(value);
  }

  render() {
    const { query } = this.state;

    return (
      <div className="search">
        <input
          type="text"
          value={query}
          name="query"
          onChange={this.handleUpdate}
          className="search__input"
          placeholder="Search Jobs"
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.githubJobs
});

export const mapDispatchToProps = dispatch => ({
  filterJobs: value => dispatch(filterJobs(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
