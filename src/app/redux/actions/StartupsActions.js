import axios from "axios";

export const GET_STARTUPS_LIST = "GET_STARTUPS_LIST";
export const GET_STARTUPS = "GET_STARTUPS";


export const getStartupsList = () => dispatch => {
  axios.get("startups").then(res => {
    dispatch({
      type: GET_STARTUPS_LIST,
      payload: res.data.data
    });
  });
};

export const getStartups = (startups) => {
  return {
    type: GET_STARTUPS,
    payload: startups
  };
};

