import {
  GET_STARTUPS_LIST,
  GET_STARTUPS,
} from "../actions/StartupsActions";

const initialState = {
  startupsList: [],
  selectedStartups: null
};

const startupsReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_STARTUPS_LIST: {
      return {
        ...state,
        startupsList: [...action.payload]
      };
    }
    case GET_STARTUPS: {
      return {
        ...state,
        selectedStartups: {...action.payload}
      };
    }
    
    default: {
      return {
        ...state
      };
    }
  }
};

export default startupsReducer;
