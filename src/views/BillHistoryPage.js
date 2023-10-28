import { Button as MantineButton, Checkbox, Table } from "@mantine/core";
import { Button as BootstrapButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteBill,
  filterBillsByRange,
  getBillList,
  getPrintBillDetails,
} from "../actions/billActions";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  DELETE_BILL_RESET,
  EDIT_BILL,
  FILTER_BILLS_BY_DATE_RESET,
  FILTER_BILLS_BY_RANGE_RESET,
} from "../constants/billConstants";
import { FaEdit } from "react-icons/fa";
import Filter from "../components/BillHistory/Filter";
import Bill from "../components/Bill";
import dateToString from "../utils/dateToString";
import { filterBillsByDate } from "../actions/billActions";

const BillHistoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { loading, error, bills } = useSelector((state) => state.billList);
  const { error: deleteError, success: deleteSuccess } = useSelector(
    (state) => state.deleteBill
  );
  const {
    loading: printLoading,
    error: printError,
    bills: printBills,
  } = useSelector((state) => state.printBillDetails);
  const {
    loading: filterByDateLoading,
    error: filterByDateError,
    bills: filterByDateBills,
  } = useSelector((state) => state.filterBillsByDate);
  const {
    loading: filterByRangeLoading,
    error: filterByRangeError,
    bills: filterByRangeBills,
  } = useSelector((state) => state.filterBillsByRange);

  // States
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedBills, setSelectedBills] = useState([]);

  // Fetching all bills list from backend
  useEffect(() => {
    dispatch({ type: DELETE_BILL_RESET });
    if (userInfo) {
      dispatch(getBillList());
    } else {
      return navigate(`/`);
    }
  }, [userInfo, dispatch, navigate, deleteSuccess]);
  const [dateValue, setDateValue] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState([null, null]);

  // Total quantity calculator
  useEffect(() => {
    if (filterByRangeBills?.length > 0) {
      setTotalQuantity(
        filterByRangeBills.reduce(
          (preVal, curVal) => preVal + curVal.quantity,
          0
        )
      );
    } else if (filterByDateBills?.length > 0) {
      setTotalQuantity(
        filterByDateBills.reduce(
          (preVal, curVal) => preVal + curVal.quantity,
          0
        )
      );
    } else if (
      bills &&
      !dateValue &&
      dateRangeValue[0] === null &&
      dateRangeValue[1] === null
    ) {
      setTotalQuantity(
        bills.reduce((preVal, curVal) => preVal + curVal.quantity, 0)
      );
    } else {
      setTotalQuantity(0);
    }
  }, [bills, dateRangeValue, dateValue, filterByDateBills, filterByRangeBills]);

  // Filtering fetched bill list according to date value
  useEffect(() => {
    if (dateValue && bills) {
      setDateRangeValue([null, null]);
      dispatch(filterBillsByDate(dateToString(dateValue)));
    }
  }, [bills, dateValue, dispatch]);

  // Filtering fetched bill list according to date range value
  useEffect(() => {
    if (dateRangeValue[0] !== null && dateRangeValue[1] !== null && bills) {
      setDateValue(null);
      dispatch(
        filterBillsByRange(
          dateToString(dateRangeValue[0]),
          dateToString(dateRangeValue[1])
        )
      );
    }
  }, [bills, dateRangeValue, dispatch]);

  // reset filtered bills if no value is selected
  useEffect(() => {
    if (
      dateRangeValue[0] === null &&
      dateRangeValue[1] === null &&
      !dateValue
    ) {
      dispatch({ type: FILTER_BILLS_BY_DATE_RESET });
      dispatch({ type: FILTER_BILLS_BY_RANGE_RESET });
    }
  }, [dateRangeValue, dateValue, dispatch]);

  // Delete bill
  const deleteBillHandler = (id) => {
    if (window.confirm(`Are you sure you want to delete the bill?`) === true) {
      dispatch(deleteBill(id));
    }
  };

  // Edit bill
  const editBillHandler = (index) => {
    dispatch({ type: EDIT_BILL, payload: bills[index] });
    navigate("/editbill");
  };

  // Print bill
  const printBillHandler = () => {
    dispatch(getPrintBillDetails({ printBillIds: selectedBills }));
    setSelectedBills([]);
  };
  useEffect(() => {
    if (!printLoading && printBills) {
      var printContents = document.getElementById("printCont").innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      window.location.reload();
      document.body.innerHTML = originalContents;
    }
  }, [printBills, printLoading]);

  return (
    <>
      {deleteError && <Message variant='danger'>{deleteError}</Message>}
      {deleteSuccess && (
        <Message variant='success'>Bill deleted successfully</Message>
      )}
      {loading || filterByDateLoading || filterByRangeLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : filterByDateError ? (
        <Message variant='danger'>{filterByDateError}</Message>
      ) : filterByRangeError ? (
        <Message variant='danger'>{filterByRangeError}</Message>
      ) : (
        <>
          <div id='printCont' style={{ display: "none" }}>
            {printLoading ? (
              <Loader />
            ) : printError ? (
              <Message variant='danger'>{printError}</Message>
            ) : (
              printBills.map((each) => (
                <Bill
                  bill={each.bill}
                  setBill={(val) => console.log(val)}
                  unit={each.unit}
                  key={each.bill._id}
                />
              ))
            )}
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Filter
              dateValue={dateValue}
              setDateValue={setDateValue}
              dateRangeValue={dateRangeValue}
              setDateRangeValue={setDateRangeValue}
            />
            {selectedBills.length > 0 && (
              <BootstrapButton onClick={printBillHandler}>
                Print
              </BootstrapButton>
            )}
          </div>
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th style={{ fontWeight: "600" }}></th>
                <th style={{ fontWeight: "600" }}>Invoice no.</th>
                <th style={{ fontWeight: "600" }}>Institute ID</th>
                <th style={{ fontWeight: "600" }}>Place of supply</th>
                <th style={{ fontWeight: "600" }}>Date of supply</th>
                <th style={{ fontWeight: "600" }}>Qty</th>
                <th style={{ fontWeight: "600" }}>Total</th>
                <th style={{ fontWeight: "600" }}></th>
                <th style={{ fontWeight: "600" }}></th>
              </tr>
            </thead>
            <tbody>
              {(filterByDateBills?.length > 0
                ? filterByDateBills
                : dateValue
                ? []
                : filterByRangeBills?.length > 0
                ? filterByRangeBills
                : dateRangeValue[0] && dateRangeValue[1]
                ? []
                : bills
              ).map((bill, index) => (
                <tr key={bill._id}>
                  <td>
                    <Checkbox
                      onChange={(event) => {
                        if (event.currentTarget.checked) {
                          setSelectedBills((preVal) => [...preVal, bill._id]);
                        } else {
                          setSelectedBills((preVal) =>
                            preVal.filter((each) => each !== bill._id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td>{bill.invoiceNumber}</td>
                  <td>{bill.instituteCode}</td>
                  <td>{bill.placeOfSupply}</td>
                  <td>{dateToString(new Date(bill.dateOfSupply))}</td>
                  <td>{bill.quantity}</td>
                  <td>{bill.totalAmount}</td>
                  <td>
                    <MantineButton
                      variant='subtle'
                      onClick={() => editBillHandler(index)}
                    >
                      <FaEdit />
                    </MantineButton>
                  </td>
                  <td>
                    <MantineButton
                      variant='subtle'
                      color={"red"}
                      onClick={() => deleteBillHandler(bill._id)}
                    >
                      <RiDeleteBinLine />
                    </MantineButton>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  Total:
                  <br />
                  {totalQuantity}
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default BillHistoryPage;
