import React, { forwardRef, useEffect, useState } from "react";
import {
  Button as MantineButton,
  Checkbox,
  Select,
  Table,
} from "@mantine/core";
import { Button as BootstrapButton } from "react-bootstrap";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { Col, Container } from "react-bootstrap";
import { FaEdit, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUnitList } from "../actions/unitActions";
import { useNavigate } from "react-router-dom";
import {
  deleteBill,
  filterInstituteBillsByDate,
  filterInstituteBillsByRange,
  getInstituteBillList,
  getPrintBillDetails,
} from "../actions/billActions";
import {
  DELETE_BILL_RESET,
  EDIT_BILL,
  FILTER_INSTITUTE_BILLS_BY_DATE_RESET,
  FILTER_INSTITUTE_BILLS_BY_RANGE_RESET,
} from "../constants/billConstants";
import Filter from "../components/BillHistory/Filter";
import { RiDeleteBinLine } from "react-icons/ri";
import Bill from "../components/Bill";
import dateToString from "../utils/dateToString";

const SchoolBillHistoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, units } = useSelector((state) => state.unitList);
  const {
    loading: loadingTable,
    error: errorTable,
    bills,
  } = useSelector((state) => state.InstituteBillList);
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
  } = useSelector((state) => state.filterInstituteBillsByDate);
  const {
    loading: filterByRangeLoading,
    error: filterByRangeError,
    bills: filterByRangeBills,
  } = useSelector((state) => state.filterInstituteBillsByRange);

  // States
  const [allInstitutes, setAllInstitutes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [instituteCode, setInstituteCode] = useState("");
  const [message, setMessage] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedBills, setSelectedBills] = useState([]);
  const [dateValue, setDateValue] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState([null, null]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Redirecting if user is not logged in
  useEffect(() => {
    if (!userInfo) {
      return navigate(`/`);
    }
  }, [userInfo, navigate]);

  //Fetching unit list
  useEffect(() => {
    if (userInfo) {
      dispatch(getUnitList());
    }
  }, [userInfo, dispatch]);

  // Extracting all institutes from fetched units and storing in state
  useEffect(() => {
    if (units) {
      let institutes = [];
      units.forEach((un) => {
        const currInstitutes = un.institutes.map((inst) => {
          return {
            label: inst.nameOfInstitute,
            value: inst._id,
            group: un.unit,
            code: inst.code,
            unitId: un._id,
            instituteId: inst._id,
            instituteCode: inst.code,
          };
        });
        institutes = [...institutes, ...currInstitutes];
      });
      setAllInstitutes([...institutes]);
    }
  }, [units]);

  // Fetching all bills of specific institute from backend
  useEffect(() => {
    dispatch({ type: DELETE_BILL_RESET });
    if (userInfo) {
      dispatch(getInstituteBillList({ id: instituteCode }));
    } else {
      return navigate(`/`);
    }
  }, [userInfo, dispatch, navigate, deleteSuccess, instituteId, instituteCode]);

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
      dispatch(
        filterInstituteBillsByDate(dateToString(dateValue), instituteCode)
      );
    }
  }, [bills, dateValue, dispatch, instituteCode]);

  // Filtering fetched bill list according to date range value
  useEffect(() => {
    if (dateRangeValue[0] !== null && dateRangeValue[1] !== null && bills) {
      setDateValue(null);
      dispatch(
        filterInstituteBillsByRange(
          dateToString(dateRangeValue[0]),
          dateToString(dateRangeValue[1]),
          instituteCode
        )
      );
    }
  }, [bills, dateRangeValue, dispatch, instituteCode]);

  // reset filtered bills if no value is selected
  useEffect(() => {
    if (
      dateRangeValue[0] === null &&
      dateRangeValue[1] === null &&
      !dateValue
    ) {
      dispatch({ type: FILTER_INSTITUTE_BILLS_BY_DATE_RESET });
      dispatch({ type: FILTER_INSTITUTE_BILLS_BY_RANGE_RESET });
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
    <Container>
      {" "}
      {message && <Message variant='danger'>{message}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Col sm={12} md={6} className='mx-auto'>
          <Select
            className='mt-5 mb-4'
            size='lg'
            label='Search'
            placeholder='Enter Code or Name of Institute'
            searchable
            data={allInstitutes}
            nothingFound='Not found'
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onDropdownClose={() => {
              setSearchValue(selectValue);
            }}
            itemComponent={forwardRef(
              ({ label, code, instituteId, instituteCode }, ref) => (
                <div
                  ref={ref}
                  className='px-4 py-2 d-flex align-items-center'
                  style={{ gap: "20px", cursor: "pointer" }}
                  onClick={() => {
                    setSearchValue(label);
                    setSelectValue(label);
                    setInstituteId(instituteId);
                    setInstituteCode(instituteCode);
                    setMessage("");
                  }}
                >
                  <div>{code}</div>
                  <div className='d-inline-block text-right'>{label}</div>
                </div>
              )
            )}
            filter={(value, item) => {
              return (
                item.label?.toLowerCase().includes(value.toLowerCase()) ||
                item.code.toString().toLowerCase().includes(value.toLowerCase())
              );
            }}
            maxDropdownHeight={280}
            rightSection={<FaSearch />}
          />
        </Col>
      )}
      {deleteError && <Message variant='danger'>{deleteError}</Message>}
      {deleteSuccess && (
        <Message variant='success'>Bill deleted successfully</Message>
      )}
      {instituteId &&
        (loadingTable || filterByDateLoading || filterByRangeLoading ? (
          <Loader />
        ) : errorTable ? (
          <Message variant='danger'>{error}</Message>
        ) : filterByDateError ? (
          <Message variant='danger'>{filterByDateError}</Message>
        ) : filterByRangeError ? (
          <Message variant='danger'>{filterByRangeError}</Message>
        ) : (
          <div className='mt-5'>
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
                  <tr key={bill.invoiceNumber}>
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
          </div>
        ))}
    </Container>
  );
};

export default SchoolBillHistoryPage;
