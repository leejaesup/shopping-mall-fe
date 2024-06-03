import api from "../utils/api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import { commonUiActions } from "./commonUiAction";

const getProductList = (query) => async (dispatch) => {};
const getProductDetail = (id) => async (dispatch) => {};

const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({type: types.PRODUCT_CREATE_REQUEST})
    const response = await api.post("/product", formData);
    if (response.status !== 200) {
      throw new Error(response.error);
    }
    dispatch(commonUiActions.showToastMessage("상품 생성 완료", "success"));
  } catch (error) {
    dispatch({type: types.PRODUCT_CREATE_FAIL, payload: error.error});
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};
const deleteProduct = (id) => async (dispatch) => {};

const editProduct = (formData, id) => async (dispatch) => {};

export const productActions = {
  getProductList,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
};
