import {
  GET_INVESTORS_LIST,
  GET_INVESTOR,
  FRIEND_REQUEST,
  GET_INVESTOR_FOLLOWERS
} from "../actions/InvestorActions";

const initialState = {
  investorsList: [],
  selectedInvestor: null
};

const InvestorReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_INVESTORS_LIST: {
      return {
        ...state,
        investorsList: [...action.payload]
      };
    }
    case GET_INVESTOR: {
      return {
        ...state,
        selectedInvestor: {...action.payload}
      };
    }
    case GET_INVESTOR_FOLLOWERS: {
      // const freindStatus = action.payload;
      return {
        ...state,
        selectedInvestor: { ...state.selectedInvestor ,
                          followers : [...action.payload],
                          }
      };
    }
    case FRIEND_REQUEST: {
      const freindStatus = action.payload;
      return {
        ...state,
        selectedInvestor: { ...state.selectedInvestor ,
                          freindshipStatus : freindStatus,
                          }
      };
    }
    // case GET_RATING_LIST: {
    //   return {
    //     ...state,
    //     ratingList: [...action.payload]
    //   };
    // }
    // case GET_BRAND_LIST: {
    //   return {
    //     ...state,
    //     brandList: [...action.payload]
    //   };
    // }
    // case GET_CART_LIST: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    
    // case DELETE_PRODUCT_FROM_CART: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    // case UPDATE_CART_AMOUNT: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    default: {
      return {
        ...state
      };
    }
  }
};

export default InvestorReducer;
