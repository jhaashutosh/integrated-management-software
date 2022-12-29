import {
  ADD_INSTITUTE_ERROR,
  ADD_INSTITUTE_REQUEST,
  ADD_INSTITUTE_RESET,
  ADD_INSTITUTE_SUCCESS,
  DELETE_INSTITUTE_ERROR,
  DELETE_INSTITUTE_REQUEST,
  DELETE_INSTITUTE_RESET,
  DELETE_INSTITUTE_SUCCESS,
  EDIT_INSTITUTE_ERROR,
  EDIT_INSTITUTE_REQUEST,
  EDIT_INSTITUTE_RESET,
  EDIT_INSTITUTE_SUCCESS,
  UNIT_DETAILS_ERROR,
  UNIT_DETAILS_REQUEST,
  UNIT_DETAILS_SUCCESS,
  UNIT_LIST_ERROR,
  UNIT_LIST_REQUEST,
  UNIT_LIST_SUCCESS,
} from "../constants/unitConstants";

export const unitListReducer = (state = {}, action) => {
  switch (action.type) {
    case UNIT_LIST_REQUEST:
      return { loading: true };

    case UNIT_LIST_SUCCESS:
      return { loading: false, units: action.payload };

    case UNIT_LIST_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const unitDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UNIT_DETAILS_REQUEST:
      return { loading: true };

    case UNIT_DETAILS_SUCCESS:
      return { loading: false, unit: action.payload };

    case UNIT_DETAILS_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addInstituteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_INSTITUTE_REQUEST:
      return { loading: true };

    case ADD_INSTITUTE_SUCCESS:
      return { loading: false, success: true };

    case ADD_INSTITUTE_ERROR:
      return { loading: false, error: action.payload };

    case ADD_INSTITUTE_RESET:
      return {};

    default:
      return state;
  }
};

export const deleteInstituteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INSTITUTE_REQUEST:
      return { loading: true };

    case DELETE_INSTITUTE_SUCCESS:
      return { loading: false, success: true };

    case DELETE_INSTITUTE_ERROR:
      return { loading: false, error: action.payload };

    case DELETE_INSTITUTE_RESET:
      return {};

    default:
      return state;
  }
};

export const editInstituteReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_INSTITUTE_REQUEST:
      return { loading: true };

    case EDIT_INSTITUTE_SUCCESS:
      return { loading: false, success: true };

    case EDIT_INSTITUTE_ERROR:
      return { loading: false, error: action.payload };

    case EDIT_INSTITUTE_RESET:
      return {};

    default:
      return state;
  }
};
