import {
  GET_SCHOLARSHIP_LIST,
  GET_SCHOLARSHIP,
} from "../actions/ScholarshipActions";

const initialState = {
  scholarshipsList: [],
  selectedScholarship: null
};

const ScholarshipReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_SCHOLARSHIP_LIST: {
      return {
        ...state,
        scholarshipsList: [...action.payload]
      };
    }
    case GET_SCHOLARSHIP: {
      return {
        ...state,
        selectedScholarship: {...action.payload}
      };
    }
    
    default: {
      return {
        ...state
      };
    }
  }
};

export default ScholarshipReducer;
