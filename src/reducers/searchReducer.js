import { REQUEST_API, REQUEST_API_ERROR, REQUEST_API_SUCCESS, RESET_RESULTS } from "../actions"

const INITIAL_STATE = {
  result: [],
  isLoading: false,
}

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type){
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      result: [...payload],
      isLoading: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      isLoading: false,
    };
  case RESET_RESULTS:
    return {
      ...state,
      result: [],
      isLoading: false,
    }
  default:
    return state;
  }
}

export default searchReducer;
