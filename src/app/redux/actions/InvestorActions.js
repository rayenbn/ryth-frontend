import axios from "axios";
import localStorageService from "../../services/localStorageService";
import API from '../../../api';
export const GET_INVESTORS_LIST = "GET_INVESTORS_LIST";
export const GET_INVESTOR = "GET_INVESTOR";
export const FRIEND_REQUEST = "FRIEND_REQUEST";
export const GET_INVESTOR_FOLLOWERS ="GET_INVESTOR_FOLLOWERS";
export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";

export const getInvestorsList = () => dispatch => {
  
  axios.get("investors"
   ).then(res => {
    dispatch({
      type: GET_INVESTORS_LIST,
      payload: res.data.data
    });
  });
};

export const getInvestor = (investor) => {
  return {
    type: GET_INVESTOR,
    payload: investor
  };
};

export const getInvestorFollowers = (followers) => {
  return {
    type: GET_INVESTOR_FOLLOWERS,
    payload: followers
  };
};

export const addFriend = (investorId) => dispatch => {
  axios.post(`clients/request/friend/${investorId}`).then(res => {
    dispatch({
      type: FRIEND_REQUEST,
      payload: "Friend request Pending"
    });
  })
  .catch(error => {
    console.log('add friend error', error);
    // return dispatch({
    //   type: LOGIN_ERROR,
    //   payload: error
    // });
  });
};

export const deleteFriendRequest = (investorId) => dispatch => {
  axios.post(`clients/request/friend/remove/${investorId}`).then(res => {
    dispatch({
      type: FRIEND_REQUEST,
      payload: "Add friend"
    });
  })
  .catch(error => {
    console.log('deleteFriendRequest', error);
    // return dispatch({
    //   type: LOGIN_ERROR,
    //   payload: error
    // });
  });
};