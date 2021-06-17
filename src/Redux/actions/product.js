import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  GET_PRODUCT_BY_ID,
} from "../actiontypes/product";
import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios
    .get("/api/product/")
    .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data.products }))
    .catch((err) => {
      dispatch({ type: GET_PRODUCTS_FAIL });

      console.log(err);
    });
};

export const addProduct = (newProduct) => (dispatch) => {
  axios
    .post("/api/product/", newProduct)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT });
      dispatch(getProducts());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAIL });

      console.log(err);
    });
};

export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`/api/product/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT });

      dispatch(getProducts());

      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (id, newValue) => (dispatch) => {
  axios
    .put(`/api/product/${id}`, newValue)
    .then((res) => {
      dispatch({ type: UPDATE_PRODUCT });

      dispatch(getProducts());
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PRODUCT_FAIL });

      console.log(err);
    });
};

export const getProductsById = (id) => (dispatch) => {
  axios
    .get(`/api/product/${id}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data.product });
    })
    .catch((err) => console.log(err));
};
