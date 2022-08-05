import axios from "axios";

export const GET_UNIVERSITIES_LIST = "GET_UNIVERSITIES_LIST";
export const GET_UNIVERSITY = "GET_UNIVERSITY";

export const GET_CART_LIST = "GET_CART_LIST";
export const GET_RATING_LIST = "GET_RATING_LIST";
export const GET_BRAND_LIST = "GET_BRAND_LIST";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";

export const getUniversitiesList = () => dispatch => {
  axios.get("universities").then(res => {
    dispatch({
      type: GET_UNIVERSITIES_LIST,
      payload: res.data.data
    });
  });
};

export const getUniversity = (university) => {
  return {
    type: GET_UNIVERSITY,
    payload: university
  };
};

// export const getUniversity = (id) => dispatch => {
//   axios.get("http://127.0.0.1:8000/api/v1/universities", { id }).then(res => {
//     dispatch({
//       type: GET_UNIVERSITY,
//       payload: res.data.data
//     });
//   });
// };


export const getRatingList = () => dispatch => {
  axios.get("/api/ecommerce/get-rating-list").then(res => {
    dispatch({
      type: GET_RATING_LIST,
      payload: res.data
    });
  });
};

export const getBrandList = () => dispatch => {
  axios.get("/api/ecommerce/get-brand-list").then(res => {
    dispatch({
      type: GET_BRAND_LIST,
      payload: res.data
    });
  });
};

export const getCartList = uid => dispatch => {
  axios.get("/api/ecommerce/get-cart-list", { data: uid }).then(res => {
    dispatch({
      type: GET_CART_LIST,
      payload: res.data
    });
  });
};

export const addProductToCart = (uid, productId) => dispatch => {
  axios.post("/api/ecommerce/add-to-cart", { uid, productId }).then(res => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data
    });
  });
};

export const deleteProductFromCart = (uid, productId) => dispatch => {
  axios
    .post("/api/ecommerce/delete-from-cart", { uid, productId })
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: res.data
      });
    });
};

export const updateCartAmount = (uid, productId, amount) => dispatch => {
  axios
    .post("/api/ecommerce/update-cart-amount", { uid, productId, amount })
    .then(res => {
      dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: res.data
      });
    });
};
