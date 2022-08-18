import axios from "axios";

export const GET_SCHOLARSHIP_LIST = "GET_SCHOLARSHIP_LIST";
export const GET_SCHOLARSHIP = "GET_SCHOLARSHIP";


export const getScholarshipList = () => dispatch => {
  axios.get("scholarships").then(res => {
    dispatch({
      type: GET_SCHOLARSHIP_LIST,
      payload: res.data.data
    });
  });
};

export const getScholarship = (scholarship) => {
  return {
    type: GET_SCHOLARSHIP,
    payload: scholarship
  };
};

