import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi, resetResults } from '../actions'
import Results from '../components/Results';
import '../styles/home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = { 
      userInput: '',
    };
    this.handleState = this.handleState.bind(this);
    this.getInformation = this.getInformation.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    const { reset } = this.props;
    reset();
  }

  handleState({ target: { name, value } }) {
    this.setState({
      [name]: value,
    })
  }

  async getInformation() {
    const { fetchApi, results } = this.props;
    await fetchApi();
    await console.log(results);
  }

  handleEnter({ key }) {
    const { fetchApi } = this.props;
    const { userInput } = this.state;
    (key === 'Enter' && fetchApi(userInput));
  } 

  render() {
    const { userInput } = this.state;
    return (
      <main className="main">
        <div className="search-bar-container">
          <label className="home-form-label form-label" htmlFor="user-input">
            <i className="home-icon fa-2x fab fa-github" />
            <input
              type="text"
              id="user-input"
              name="userInput"
              className="form-control form-input"
              placeholder="Search for a GitHub username"
              onChange={this.handleState}
              onKeyDown={this.handleEnter}
              value={userInput}
            />
          </label>
        </div>
        <Results />
      </main>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => ({
  results: searchReducer.result,
})

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (payload) => dispatch(fetchApi(payload)),
  reset: () => dispatch(resetResults()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
