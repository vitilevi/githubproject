export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const REQUEST_DETAILS = 'REQUEST_DETAILS';
export const REQUEST_DETAILS_SUCCESS = 'REQUEST_DETAILS_SUCCESS'
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const RESET_RESULTS = 'RESET_RESULTS';
export const RESET_REPOS = 'RESET_REPOS';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const requestApiError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

export const requestDetails = (payload) => ({
  type: REQUEST_DETAILS,
  payload,
});

export const requestDetailsSuccess = (payload) => ({
  type: REQUEST_DETAILS_SUCCESS,
  payload,
});

export const requestUser = (payload) => ({
  type: REQUEST_USER,
  payload,
})

export const requestUserSuccess = (payload) => ({
  type: REQUEST_USER_SUCCESS,
  payload,
})

export const resetResults = () => ({
  type: RESET_RESULTS,
});

export const resetRepos = () => ({
  type: RESET_REPOS,
});

export const fetchApi = (name) => (dispatch) => {
  dispatch(requestApi());
  return (fetch(`https://api.github.com/search/users?q=${name}&per_page=5`)
    .then((response) => response.json()))
    .then((result) => dispatch(requestApiSuccess(result.items)))
    .catch((error) => dispatch(requestApiError(error)))
};

export const fetchUser = (login) => (dispatch) => {
  dispatch(requestUser())
  return fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then((result) => dispatch(requestUserSuccess(result)))
};

export const fetchDetails = (login) => (dispatch) => {
  dispatch(requestDetails())
  return fetch(`https://api.github.com/users/${login}/repos`)
  .then((response) => response.json())
  .then((result) => dispatch(requestDetailsSuccess(result)))
};
