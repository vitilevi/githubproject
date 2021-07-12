import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchApi, fetchDetails, fetchUser, resetRepos } from '../actions';
import '../styles/details.css'

class Details extends Component {
  componentDidMount() {
    const { reset } = this.props;
    reset();
    this.getUserAndRepos();
  }

  getUserAndRepos() {
    const { match: { params: { login } }, fetchApi, fetchRepo, fetchUserProfile } = this.props;
    fetchApi(login);
    fetchUserProfile(login);
    fetchRepo(login);
  }

  render() {
    const { repos, userProfile, isLoadingProfile, isLoadingRepo } = this.props;
    const { login, avatar_url, html_url, bio, location, name } = userProfile;
    const loadingProfile = <h1>Loading profile...</h1>;
    const loadingRepo = <h1>Loading repos...</h1>;
    const emptyRepo = <h2>No repositories</h2>
    return (
      <div className="profile">
        <div className="back-btn">
          <Link to="/"><i class="fas fa-arrow-circle-left"> Back home</i></Link>
        </div>
        {isLoadingProfile? loadingProfile : (
          <div className="profile-wrapper">
            <div className="profile-pic">
              <img className="img-details" src={avatar_url} alt={login} />
              <div className="profile-name">
                <span>{login}</span>
                <a className="btn btn-primary" target="_blank" rel="noreferrer" href={html_url}>Profile</a>
              </div>
            </div>
            <div className="profile-details">
              <p>{name}</p>
              <p>{bio}</p>
              <p>{location}</p>
            </div>
          </div>
        )}
        <div className="profile-repos">
          <h2>Principais repositórios</h2>
          { isLoadingRepo? loadingRepo : repos.length === 0? emptyRepo : repos.filter(({fork}) => fork === false)
            .sort((a, b) => b.size - a.size)
            .slice(0, 3)
            .map(({name, html_url}, i) => (
            <div className="repos" key={i}>
              <span className="repo-name">{name}</span>
              <a className="btn btn-light" target="_blank" rel="noreferrer" href={html_url}>Details</a>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ details }) => ({
  userProfile: details.user,
  repos: details.detailsResult,
  isLoadingProfile: details.isLoadingProfile,
  isLoadingRepo: details.isLoadingRepo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (payload) => dispatch(fetchApi(payload)),
  fetchRepo: (payload) => dispatch(fetchDetails(payload)),
  fetchUserProfile: (payload) => dispatch(fetchUser(payload)),
  reset: () => dispatch(resetRepos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);

