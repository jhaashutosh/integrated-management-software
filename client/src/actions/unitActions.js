import axios from "axios";
import {
  ADD_INSTITUTE_ERROR,
  ADD_INSTITUTE_REQUEST,
  ADD_INSTITUTE_SUCCESS,
  DELETE_INSTITUTE_ERROR,
  DELETE_INSTITUTE_REQUEST,
  DELETE_INSTITUTE_SUCCESS,
  EDIT_INSTITUTE_ERROR,
  EDIT_INSTITUTE_REQUEST,
  EDIT_INSTITUTE_SUCCESS,
  UNIT_DETAILS_ERROR,
  UNIT_DETAILS_REQUEST,
  UNIT_DETAILS_SUCCESS,
  UNIT_LIST_ERROR,
  UNIT_LIST_REQUEST,
  UNIT_LIST_SUCCESS,
} from "../constants/unitConstants";

export const getUnitList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: UNIT_LIST_REQUEST });

    const { data } = await axios.get(`/api/units/`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: UNIT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UNIT_LIST_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getUnitDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UNIT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/units/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: UNIT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UNIT_DETAILS_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const addInstitute = (institute) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_INSTITUTE_REQUEST });

    const { data } = await axios.post(`/api/units/`, institute, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: ADD_INSTITUTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_INSTITUTE_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteInstitute =
  ({ unitId, instituteCode }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_INSTITUTE_REQUEST });

      const { data } = await axios.delete(`/api/units/`, {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
        data: { unitId, instituteCode },
      });
      dispatch({ type: DELETE_INSTITUTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_INSTITUTE_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const editInstitute =
  (updatedInstitute) => async (dispatch, getState) => {
    try {
      dispatch({ type: EDIT_INSTITUTE_REQUEST });

      const { data } = await axios.put(`/api/units/`, updatedInstitute, {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      });
      dispatch({ type: EDIT_INSTITUTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EDIT_INSTITUTE_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
