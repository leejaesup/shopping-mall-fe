import * as types from "../constants/product.constants";
const initialState = {
  loading: false,
  error: "",
  productList: [],
  totalPageNum : 1,
  selectedProduct: null
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.PRODUCT_CREATE_REQUEST:
    case types.PRODUCT_GET_REQUEST:
    case types.PRODUCT_EDIT_REQUEST:
    case types.PRODUCT_DELETE_REQUEST:
    case types.GET_PRODUCT_DETAIL_REQUEST:
      return {...state, loading: true};
    case types.PRODUCT_CREATE_SUCCESS:
    case types.PRODUCT_EDIT_SUCCESS:
    case types.PRODUCT_DELETE_SUCCESS:
      return {...state, loading: false, error: ""};
    case types.PRODUCT_GET_SUCCESS:
      return {...state, loading: false, error: "", productList: payload.data, totalPageNum: payload.totalPageNum};
    case types.PRODUCT_CREATE_FAIL:
    case types.PRODUCT_GET_FAIL:
    case types.PRODUCT_EDIT_FAIL:
    case types.PRODUCT_DELETE_FAIL:
    case types.GET_PRODUCT_DETAIL_FAIL:
      return {...state, loading: false, error: payload};
    case types.SET_SELECTED_PRODUCT:
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return {...state, loading: false, selectedProduct: payload};
    case types.SET_SEARCH_KEYWORD:
      return {...state, searchKeyword: payload};
    default:
      return state;
  }
}

export default productReducer;
