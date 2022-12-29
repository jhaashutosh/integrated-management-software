import axios from "axios";
import {
  BILL_LIST_ERROR,
  BILL_LIST_REQUEST,
  BILL_LIST_SUCCESS,
  DELETE_BILL_ERROR,
  DELETE_BILL_REQUEST,
  DELETE_BILL_SUCCESS,
  FILTER_BILLS_BY_DATE_ERROR,
  FILTER_BILLS_BY_DATE_REQUEST,
  FILTER_BILLS_BY_DATE_SUCCESS,
  FILTER_BILLS_BY_RANGE_ERROR,
  FILTER_BILLS_BY_RANGE_REQUEST,
  FILTER_BILLS_BY_RANGE_SUCCESS,
  FILTER_INSTITUTE_BILLS_BY_DATE_ERROR,
  FILTER_INSTITUTE_BILLS_BY_DATE_REQUEST,
  FILTER_INSTITUTE_BILLS_BY_DATE_SUCCESS,
  FILTER_INSTITUTE_BILLS_BY_RANGE_ERROR,
  FILTER_INSTITUTE_BILLS_BY_RANGE_REQUEST,
  FILTER_INSTITUTE_BILLS_BY_RANGE_SUCCESS,
  INSTITUTE_BILL_LIST_ERROR,
  INSTITUTE_BILL_LIST_REQUEST,
  INSTITUTE_BILL_LIST_SUCCESS,
  PRINT_BILL_DETAILS_ERROR,
  PRINT_BILL_DETAILS_REQUEST,
  PRINT_BILL_DETAILS_SUCCESS,
  SAVE_BILL_ERROR,
  SAVE_BILL_REQUEST,
  SAVE_BILL_SUCCESS,
  UPDATE_BILL_ERROR,
  UPDATE_BILL_REQUEST,
  UPDATE_BILL_SUCCESS,
} from "../constants/billConstants";

export const saveBill = (bill) => async (dispatch, getState) => {
  try {
    dispatch({ type: SAVE_BILL_REQUEST });

    await axios.post(`/api/bills`, bill, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: SAVE_BILL_SUCCESS });
  } catch (error) {
    dispatch({
      type: SAVE_BILL_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateBill = (bill, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_BILL_REQUEST });

    await axios.put(`/api/bills/${id}`, bill, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: UPDATE_BILL_SUCCESS });
  } catch (error) {
    dispatch({
      type: UPDATE_BILL_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getBillList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BILL_LIST_REQUEST });

    const { data } = await axios.get(`/api/bills/`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: BILL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BILL_LIST_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getInstituteBillList =
  ({ id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: INSTITUTE_BILL_LIST_REQUEST });

      const { data } = await axios.get(`/api/bills/institutes/${id}`, {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      });
      dispatch({ type: INSTITUTE_BILL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: INSTITUTE_BILL_LIST_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const deleteBill = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_BILL_REQUEST });

    const { data } = await axios.delete(`/api/bills/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: DELETE_BILL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_BILL_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getPrintBillDetails =
  ({ printBillIds }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRINT_BILL_DETAILS_REQUEST });

      const { data } = await axios.post(`/api/bills/print`, printBillIds, {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      });
      dispatch({ type: PRINT_BILL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRINT_BILL_DETAILS_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const filterBillsByDate = (date) => async (dispatch, getState) => {
  try {
    dispatch({ type: FILTER_BILLS_BY_DATE_REQUEST });
    const { data } = await axios.get(`/api/bills/filter/date/?date=${date}`, {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    });
    dispatch({ type: FILTER_BILLS_BY_DATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FILTER_BILLS_BY_DATE_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const filterBillsByRange = (from, to) => async (dispatch, getState) => {
  try {
    dispatch({ type: FILTER_BILLS_BY_RANGE_REQUEST });

    console.log(`/api/bills/filter/range/?from=${from}&to=${to}`);
    const { data } = await axios.get(
      `/api/bills/filter/range/?from=${from}&to=${to}`,
      {
        headers: {
          Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
        },
      }
    );
    dispatch({ type: FILTER_BILLS_BY_RANGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FILTER_BILLS_BY_RANGE_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const filterInstituteBillsByDate =
  (date, instituteCode) => async (dispatch, getState) => {
    try {
      dispatch({ type: FILTER_INSTITUTE_BILLS_BY_DATE_REQUEST });
      const { data } = await axios.get(
        `/api/bills/filter/institute/date/?date=${date}&instituteCode=${instituteCode}`,
        {
          headers: {
            Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
          },
        }
      );
      dispatch({ type: FILTER_INSTITUTE_BILLS_BY_DATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FILTER_INSTITUTE_BILLS_BY_DATE_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const filterInstituteBillsByRange =
  (from, to, instituteCode) => async (dispatch, getState) => {
    try {
      dispatch({ type: FILTER_INSTITUTE_BILLS_BY_RANGE_REQUEST });
      const { data } = await axios.get(
        `/api/bills/filter/institute/range/?from=${from}&to=${to}&instituteCode=${instituteCode}`,
        {
          headers: {
            Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
          },
        }
      );
      dispatch({
        type: FILTER_INSTITUTE_BILLS_BY_RANGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FILTER_INSTITUTE_BILLS_BY_RANGE_ERROR,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
