import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchApi, fetchDetails } from '../actions';
import '../styles/results.css'

class Results extends Component {
  getRepo(url) {
    const { fetchRepo } = this.props;
    fetchRepo(url);
  }

  render() {
    const { results, isLoading } = this.props;
    const loading = <h1 className="loading">Loading...</h1>
    return (
      <div className="results">
        {isLoading? loading 
          : results.map(({ login, avatar_url, html_url }, i) => (
            <div className="profile-list" key={i}>
              <div className="profile-pic-details">
                <span>{login}</span>
                <img className="img" src={avatar_url} alt={login} />
              </div>
              <div className="profile-btn">
                <a className="btn btn-primary" target="_blank" rel="noreferrer" href={html_url}>Profile</a>
                <Link className="btn btn-info" to={`/users/${login}`}>Details</Link>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ searchReducer, details }) => ({
  results: searchReducer.result,
  isLoading: searchReducer.isLoading,
  repos: details.detailsResult,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (payload) => dispatch(fetchApi(payload)),
  fetchRepo: (payload) => dispatch(fetchDetails(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);
