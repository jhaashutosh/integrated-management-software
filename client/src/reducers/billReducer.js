import {
  BILL_LIST_ERROR,
  BILL_LIST_REQUEST,
  BILL_LIST_SUCCESS,
  DELETE_BILL_ERROR,
  DELETE_BILL_REQUEST,
  DELETE_BILL_RESET,
  DELETE_BILL_SUCCESS,
  EDIT_BILL,
  EDIT_BILL_RESET,
  FILTER_BILLS_BY_DATE_ERROR,
  FILTER_BILLS_BY_DATE_REQUEST,
  FILTER_BILLS_BY_DATE_RESET,
  FILTER_BILLS_BY_DATE_SUCCESS,
  FILTER_BILLS_BY_RANGE_ERROR,
  FILTER_BILLS_BY_RANGE_REQUEST,
  FILTER_BILLS_BY_RANGE_RESET,
  FILTER_BILLS_BY_RANGE_SUCCESS,
  FILTER_INSTITUTE_BILLS_BY_DATE_ERROR,
  FILTER_INSTITUTE_BILLS_BY_DATE_REQUEST,
  FILTER_INSTITUTE_BILLS_BY_DATE_RESET,
  FILTER_INSTITUTE_BILLS_BY_DATE_SUCCESS,
  FILTER_INSTITUTE_BILLS_BY_RANGE_ERROR,
  FILTER_INSTITUTE_BILLS_BY_RANGE_REQUEST,
  FILTER_INSTITUTE_BILLS_BY_RANGE_RESET,
  FILTER_INSTITUTE_BILLS_BY_RANGE_SUCCESS,
  INSTITUTE_BILL_LIST_ERROR,
  INSTITUTE_BILL_LIST_REQUEST,
  INSTITUTE_BILL_LIST_SUCCESS,
  PRINT_BILL_DETAILS_ERROR,
  PRINT_BILL_DETAILS_REQUEST,
  PRINT_BILL_DETAILS_RESET,
  PRINT_BILL_DETAILS_SUCCESS,
  SAVE_BILL_ERROR,
  SAVE_BILL_REQUEST,
  SAVE_BILL_RESET,
  SAVE_BILL_SUCCESS,
  UPDATE_BILL_ERROR,
  UPDATE_BILL_REQUEST,
  UPDATE_BILL_RESET,
  UPDATE_BILL_SUCCESS,
} from "../constants/billConstants";

export const saveBillReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_BILL_REQUEST:
      return { loading: true };

    case SAVE_BILL_SUCCESS:
      return { loading: false, success: true };

    case SAVE_BILL_ERROR:
      return { loading: false, error: action.payload };

    case SAVE_BILL_RESET:
      return {};

    default:
      return state;
  }
};

export const updateBillReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BILL_REQUEST:
      return { loading: true };

    case UPDATE_BILL_SUCCESS:
      return { loading: false, success: true };

    case UPDATE_BILL_ERROR:
      return { loading: false, error: action.payload };

    case UPDATE_BILL_RESET:
      return {};

    default:
      return state;
  }
};

export const billListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BILL_LIST_REQUEST:
      return { loading: true };

    case BILL_LIST_SUCCESS:
      return { loading: false, bills: action.payload };

    case BILL_LIST_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const InstituteBillListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case INSTITUTE_BILL_LIST_REQUEST:
      return { loading: true };

    case INSTITUTE_BILL_LIST_SUCCESS:
      return { loading: false, bills: action.payload };

    case INSTITUTE_BILL_LIST_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteBillReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case DELETE_BILL_REQUEST:
      return { loading: true };

    case DELETE_BILL_SUCCESS:
      return { loading: false, success: true };

    case DELETE_BILL_ERROR:
      return { loading: false, error: action.payload };

    case DELETE_BILL_RESET:
      return {};

    default:
      return state;
  }
};

export const editBillReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case EDIT_BILL:
      return { editBill: action.payload };

    case EDIT_BILL_RESET:
      return {};

    default:
      return state;
  }
};
export const printBillDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRINT_BILL_DETAILS_REQUEST:
      return { loading: true };

    case PRINT_BILL_DETAILS_SUCCESS:
      return { loading: false, bills: action.payload };

    case PRINT_BILL_DETAILS_ERROR:
      return { loading: false, error: action.payload };

    case PRINT_BILL_DETAILS_RESET:
      return { loading: false, reset: true };

    default:
      return state;
  }
};

export const filterBillsByDateReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_BILLS_BY_DATE_REQUEST:
      return { loading: true };

    case FILTER_BILLS_BY_DATE_SUCCESS:
      return { loading: false, bills: action.payload };

    case FILTER_BILLS_BY_DATE_ERROR:
      return { loading: false, error: action.payload };

    case FILTER_BILLS_BY_DATE_RESET:
      return {};

    default:
      return state;
  }
};

export const filterBillsByRangeReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_BILLS_BY_RANGE_REQUEST:
      return { loading: true };

    case FILTER_BILLS_BY_RANGE_SUCCESS:
      return { loading: false, bills: action.payload };

    case FILTER_BILLS_BY_RANGE_ERROR:
      return { loading: false, error: action.payload };

    case FILTER_BILLS_BY_RANGE_RESET:
      return {};

    default:
      return state;
  }
};

export const filterInstituteBillsByDateReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_INSTITUTE_BILLS_BY_DATE_REQUEST:
      return { loading: true };

    case FILTER_INSTITUTE_BILLS_BY_DATE_SUCCESS:
      return { loading: false, bills: action.payload };

    case FILTER_INSTITUTE_BILLS_BY_DATE_ERROR:
      return { loading: false, error: action.payload };

    case FILTER_INSTITUTE_BILLS_BY_DATE_RESET:
      return {};

    default:
      return state;
  }
};

export const filterInstituteBillsByRangeReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_INSTITUTE_BILLS_BY_RANGE_REQUEST:
      return { loading: true };

    case FILTER_INSTITUTE_BILLS_BY_RANGE_SUCCESS:
      return { loading: false, bills: action.payload };

    case FILTER_INSTITUTE_BILLS_BY_RANGE_ERROR:
      return { loading: false, error: action.payload };

    case FILTER_INSTITUTE_BILLS_BY_RANGE_RESET:
      return {};

    default:
      return state;
  }
};
