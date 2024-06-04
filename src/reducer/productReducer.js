import * as types from "../constants/product.constants";
const initialState = {
  loading: false,
  error: "",
  productList: []
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.PRODUCT_CREATE_REQUEST:
    case types.PRODUCT_GET_REQUEST:
      return {...state, loading: true};
    case types.PRODUCT_CREATE_SUCCESS:
      return {...state, loading: false, error: ""};
    case types.PRODUCT_GET_SUCCESS:
      return {...state, loading: false, error: "", productList: payload};
    case types.PRODUCT_CREATE_FAIL:
    case types.PRODUCT_GET_FAIL:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
}

export default productReducer;
