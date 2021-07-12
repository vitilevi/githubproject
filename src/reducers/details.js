import {
  REQUEST_DETAILS,
  REQUEST_DETAILS_SUCCESS,
  REQUEST_USER,
  REQUEST_USER_SUCCESS,
  RESET_REPOS,
} from "../actions"

const INITIAL_STATE = {
  detailsResult: [],
  user: {},
  isLoadingProfile: false,
  isLoadingRepo: false,
}

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type){
  case REQUEST_USER:
    return {
      ...state,
      isLoadingProfile: true,
    };
  case REQUEST_USER_SUCCESS:
    return {
      ...state,
      user: payload,
      isLoadingProfile: false,
    };
  case REQUEST_DETAILS:
    return {
      ...state,
      isLoadingRepo: true,
    };
  case REQUEST_DETAILS_SUCCESS:
    return {
      ...state,
      detailsResult: [...state.detailsResult, ...payload],
      isLoadingRepo: false,
    };
  case RESET_REPOS:
    return {
      ...state,
      detailsResult: [],
      user: {},
    };
  default:
    return state;
  }
}

export default searchReducer;