import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUnitDetails } from "../actions/unitActions";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import styles from "./BillPage.module.css";
import { ToWords } from "to-words";
import { Button, Col, Row } from "react-bootstrap";
import { updateBill } from "../actions/billActions";
import { UPDATE_BILL_RESET } from "../constants/billConstants";
import formatAMPM from "../utils/formatAMPM";
import dateToString from "../utils/dateToString";

const EditBillPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, unit } = useSelector((state) => state.unitDetails);
  const { editBill } = useSelector((state) => state.editBill);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = useSelector((state) => state.updateBill);

  // States
  const [fetchedUnit, setFetchedUnit] = useState({});
  const [fetchedInstitute, setFetchedInstitute] = useState({
    mobileNumbers: [""],
  });
  const [fetchedUnitNccHq, setFetchedUnitNccHq] = useState([]);
  const [bill, setBill] = useState({
    unitId: editBill?.unitId,
    instituteId: editBill?.instituteId,
    placeOfSupply: editBill?.placeOfSupply,
    instituteCode: editBill?.instituteCode,
    invoiceNumber: editBill?.invoiceNumber,
    dateOfSupply: dateToString(new Date(editBill?.dateOfSupply)),
    timeOfSupply: editBill?.timeOfSupply,
    dateOfBillGeneration: dateToString(
      new Date(editBill?.dateOfBillGeneration)
    ),
    quantity: editBill?.quantity,
    rate: editBill?.rate,
    taxableAmount: 0,
    totalAmount: 0,
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Redirecting if user is not logged in
  useEffect(() => {
    if (!userInfo || !editBill) {
      return navigate(`/`);
    }
  }, [userInfo, navigate, editBill]);

  // Setting taxable amount and total amount on every change of quantity/rate
  useEffect(() => {
    setBill((prevVal) => ({
      ...prevVal,
      totalAmount: (
        Math.round(prevVal.quantity * prevVal.rate * 100) / 100
      ).toFixed(2),
      taxableAmount: (
        Math.round(prevVal.quantity * prevVal.rate * 100) / 100 -
        ((prevVal.quantity * prevVal.rate * 5) / 100).toFixed(2)
      ).toFixed(2),
    }));
  }, [bill.quantity, bill.rate]);

  // To words setup for total amount in words
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });

  // Fetching unit details from unitId(in URL) when page is loaded
  useEffect(() => {
    dispatch(getUnitDetails(bill.unitId));
  }, [dispatch, bill.unitId]);

  // Storing fetched unit and institute info in state
  useEffect(() => {
    if (unit) {
      setFetchedUnitNccHq(unit.nccHq.split("\n"));
      setFetchedUnit(unit);
      const institute = unit.institutes.find(
        (inst) => inst._id === bill.instituteId
      );
      setFetchedInstitute(institute);
    }
  }, [bill.instituteId, unit]);

  // Print PDF Function
  const printPDF = () => {
    var printContents = document.getElementById("pdf").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };

  // Update bill function
  const updateBillHandler = () => {
    dispatch(updateBill(bill, editBill?._id));
  };

  // Redirecting after bill is upadated
  useEffect(() => {
    if (updateSuccess) {
      navigate("/billinghistory");
    }
    return () => {
      dispatch({ type: UPDATE_BILL_RESET });
    };
  }, [dispatch, navigate, updateSuccess]);

  return (
    <>
      {updateError && <Message variant='danger'>{updateError}</Message>}
      {updateSuccess && (
        <Message variant='success'>Bill updated successfully</Message>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {/* <Button
            type='submit'
            variant='primary'
            className={my-3 mx-auto'
            style={{ display: "inherit" }}
          >
            Download PDF
          </Button> */}
          <div className='py-4' id='pdf'>
            <div className={styles.outer}>
              <div className={styles.center_table + " " + styles.no_border}>
                <table className={styles.billTable}>
                  <tr className={styles.billTr}>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      TAX INVOICE / BILL OF SUPPLY
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      Original Copy
                    </th>
                  </tr>
                  <tr className={styles.billTr}>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.table_row +
                        " " +
                        styles.company_address
                      }
                    >
                      <div
                        className={
                          styles.company_name + " " + styles.company_detail
                        }
                      >
                        DELITE CATERERS (2022-2023)
                      </div>
                      <div className={styles.company_detail}>
                        D-46 MAHENDRA ENCLAVE
                      </div>
                      <div className={styles.company_detail}>
                        G.T. KARNAL ROAD, DELHI - 110033
                      </div>
                      <div
                        className={styles.company_detail}
                        contenteditable='true'
                      >
                        Phone 1: 9213412555
                      </div>
                      <div
                        className={styles.company_detail}
                        contenteditable='true'
                      >
                        Phone 2: 9870356611
                      </div>
                      <div
                        className={styles.company_detail}
                        contenteditable='true'
                      >
                        Phone 3: 9810326296
                      </div>
                      <div
                        className={styles.email + " " + styles.company_detail}
                        contenteditable='true'
                      >
                        email: delitecaterers46@gmail.com
                      </div>
                      <div
                        className={
                          styles.company_GST + " " + styles.company_detail
                        }
                        contenteditable='true'
                      >
                        GST NO. 07AACFD8329D1ZN
                      </div>
                    </th>
                    <th className={styles.billTh}>
                      <table
                        className={styles.billTable + " " + styles.no_border}
                      >
                        <tr className={styles.billTr + " " + styles.no_border}>
                          <th
                            className={
                              styles.billTh +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            invoice number
                            <br />
                            <span
                              contenteditable='true'
                              onInput={(e) =>
                                setBill({
                                  ...bill,
                                  invoiceNumber: e.target.textContent,
                                })
                              }
                            >
                              {editBill?.invoiceNumber}
                            </span>
                          </th>
                          <th
                            className={
                              styles.billTh +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            Dated (yyyy-mm-dd)
                            <br />
                            <span
                              contentEditable='true'
                              onInput={(e) =>
                                setBill({
                                  ...bill,
                                  dateOfBillGeneration: e.target.textContent,
                                })
                              }
                            >
                              {dateToString(
                                new Date(editBill?.dateOfBillGeneration)
                              )}
                            </span>
                          </th>
                        </tr>
                        <tr className={styles.billTr}>
                          <td
                            colspan='2'
                            className={
                              styles.billTd +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            Buyer's GST Number
                          </td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td
                            colspan='2'
                            className={
                              styles.billTd +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            Date of Supply
                            (yyyy-mm-dd)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              contentEditable='true'
                              onInput={(e) =>
                                setBill({
                                  ...bill,
                                  dateOfSupply: e.target.textContent,
                                })
                              }
                            >
                              {dateToString(new Date(editBill?.dateOfSupply))}
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td
                            colspan='2'
                            className={
                              styles.billTd +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            Time of Supply &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              contentEditable='true'
                              onInput={(e) =>
                                setBill({
                                  ...bill,
                                  timeOfSupply: e.target.textContent,
                                })
                              }
                            >
                              {editBill?.timeOfSupply}
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td
                            colspan='2'
                            className={
                              styles.billTd +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            PLACE OF SUPPLY
                          </td>
                        </tr>
                        {fetchedUnitNccHq.slice(1).map((each, index) => (
                          <tr className={styles.billTr} key={index}>
                            <td className={styles.billTd} colspan='2'>
                              {each}
                            </td>
                          </tr>
                        ))}
                      </table>
                    </th>
                  </tr>
                  <tr className={styles.billTr}>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.table_row +
                        " " +
                        styles.company_address
                      }
                    >
                      <div
                        className={
                          styles.billing_address +
                          " " +
                          styles.center_bold_element +
                          " text-dark"
                        }
                      >
                        BILLING ADDRESS
                      </div>
                      {fetchedUnitNccHq.map((each, index) => (
                        <div className={styles.company_detail} key={index}>
                          {each}
                        </div>
                      ))}
                      {/* <div className={styles.company_detail}>
                    Phone 1: 9810326296
                  </div>
                  <div className={styles.company_detail}>
                    Phone 2: 9810326296
                  </div> */}
                    </th>
                    <th className={styles.billTh}>
                      <table
                        className={styles.billTable + " " + styles.no_border}
                      >
                        <tr className={styles.billTr}>
                          <td className={styles.billTd}>&nbsp;</td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td
                            className={
                              styles.billTd +
                              " " +
                              styles.center_bold_element +
                              " text-dark"
                            }
                          >
                            SHIP TO
                          </td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td className={styles.billTd}>{fetchedUnit.unit}</td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td className={styles.billTd}>
                            {fetchedUnit.location}
                          </td>
                        </tr>
                        <tr className={styles.billTr}>
                          <td className={styles.billTd}>&nbsp;</td>
                        </tr>
                      </table>
                    </th>
                  </tr>
                </table>
              </div>
              <div className={styles.center_table + " " + styles.main_bill}>
                <table className={styles.billTable}>
                  <tr className={styles.billTr}>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      S. No.
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      HSN CODE
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      PARTICULARS
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      QTY
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      RATE
                    </th>
                    <th
                      className={
                        styles.billTh +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      AMOUNT
                    </th>
                  </tr>
                  <tr
                    className={
                      styles.billTr + " " + styles.set_height_centre_bill
                    }
                  >
                    <td className={styles.billTd}>1</td>
                    <td className={styles.billTd}>2106</td>
                    <td className={styles.billTd}>
                      REFRESHMENT PACKETS SUPPLIED TO NCC CADETS ON{" "}
                      {bill?.dateOfSupply}
                    </td>
                    <td className={styles.billTd}>
                      <div
                        contenteditable='true'
                        onInput={(e) => {
                          if (
                            Number.isNaN(Number(e.currentTarget.textContent))
                          ) {
                            alert("Quantity should be a number");
                            return;
                          } else
                            setBill({
                              ...bill,
                              quantity: e.currentTarget.textContent,
                            });
                        }}
                      >
                        {editBill?.quantity}
                      </div>
                    </td>
                    <td className={styles.billTd}>
                      <div
                        contenteditable='true'
                        onInput={(e) => {
                          if (
                            Number.isNaN(Number(e.currentTarget.textContent))
                          ) {
                            alert("Rate should be a number");
                            return;
                          } else
                            setBill({
                              ...bill,
                              rate: e.currentTarget.textContent,
                            });
                        }}
                      >
                        {((editBill?.rate * 100) / 100).toFixed(2)}
                      </div>
                    </td>
                    <td className={styles.billTd}>{bill.totalAmount}</td>
                  </tr>
                  <tr className={styles.billTr}>
                    <td className={styles.billTd}></td>
                    <td className={styles.billTd}></td>
                    <td
                      className={
                        styles.billTd +
                        " " +
                        styles.center_bold_element +
                        " text-dark"
                      }
                    >
                      TOTAL
                    </td>
                    <td className={styles.billTd}></td>
                    <td className={styles.billTd}></td>
                    <td className={styles.billTd}> {bill.totalAmount}</td>
                  </tr>
                </table>
              </div>
              <div className={styles.center_table + " text-dark py-1"}>
                <span>
                  <i>{toWords.convert(bill.totalAmount)}</i>
                </span>
              </div>
              <div className={styles.bank_detail + " px-1"}>
                <div className={styles.bank_name + " " + styles.padd5}>
                  <div className={styles.bank_name_head}>BANK DETAIL</div>
                  <div className={styles.bank_name_head}>
                    UNION BANK OF INDIA, MALL ROAD BRANCH DELHI
                  </div>
                </div>
                <div
                  className={styles.account_number_header + " " + styles.padd5}
                >
                  <div className={styles.account_number}>
                    ACCOUNT NUMBER: 4190 0101 00 50285
                  </div>
                  <div className={styles.IFSC_code}>IFSC CODE: UBIN0541907</div>
                </div>
                <div className={styles.pan_container}>
                  <div className={styles.PAN_no + " " + styles.padd5}>
                    PAN No. : AACFD8329D
                  </div>
                  <div className={styles.micr}>MICR No. :110026033</div>
                </div>
                <div className={styles.fssai + " " + styles.padd5}>
                  FSSAI LICENSE NUMBER : 13315002000078
                </div>
              </div>
              <div className={styles.total_cost_section}>
                <div
                  className={
                    styles.total_cost_calc + " " + styles.set_height_total_val
                  }
                >
                  <table
                    className={
                      styles.billTable + " " + styles.total_cost_calc_table
                    }
                  >
                    <tr className={styles.billTr}>
                      <td className={styles.billTd}>TAXABLE VALUE</td>
                      <td className={styles.billTd}>
                        {((bill.totalAmount * 100) / 105).toFixed(2)}
                      </td>
                    </tr>
                    <tr className={styles.billTr}>
                      <td className={styles.billTd}>SGST @ 2.5%</td>
                      <td className={styles.billTd}>
                        {(
                          (((bill.totalAmount * 100) / 105) * 2.5) /
                          100
                        ).toFixed(2)}
                      </td>
                    </tr>
                    <tr className={styles.billTr}>
                      <td className={styles.billTd}>CGST @ 2.5%</td>
                      <td className={styles.billTd}>
                        {(
                          (((bill.totalAmount * 100) / 105) * 2.5) /
                          100
                        ).toFixed(2)}
                      </td>
                    </tr>
                    <tr className={styles.billTr}>
                      <td className={styles.billTd}>Round Off Total Value</td>
                      <td className={styles.billTd}>{bill.totalAmount}</td>
                    </tr>
                  </table>
                </div>
                <div className={styles.final_total_val}>
                  <table className={styles.billTable}>
                    <tr className={styles.billTr}>
                      <th className={styles.billTh}>PRE-RECEIPTED RS</th>
                      <th className={styles.billTh + " px-2"}>
                        {bill.totalAmount}
                      </th>
                    </tr>
                    <tr className={styles.billTr}>
                      <td
                        colspan='2'
                        style={{ height: "95px" }}
                        className={
                          styles.billTd + " " + styles.set_height_total_val
                        }
                      ></td>
                    </tr>
                    <tr className={styles.billTr}>
                      <td className={styles.billTd} colspan='2'>
                        For DELITE CATERERS (2022-2023)
                      </td>
                    </tr>
                    <tr className={styles.billTr}>
                      <td className={styles.billTd} colspan='2'>
                        Authorized Signatory
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className={styles.bill_footer}>
                This is a Computer Generated Invoice
              </div>
            </div>
          </div>
          <Row className='justify-content-md-center'>
            <Col sm={12} md={3} lg={2}>
              <Button
                type='submit'
                variant='primary'
                className='my-3 mx-auto'
                style={{ display: "inherit", minWidth: "160px" }}
                onClick={updateBillHandler}
              >
                {updateLoading
                  ? "Updating..."
                  : updateSuccess
                  ? "Updated!"
                  : "Update"}
              </Button>
            </Col>
            <Col sm={12} md={3} lg={2}>
              <Button
                type='submit'
                variant='primary'
                className='my-3 mx-auto'
                style={{ display: "inherit", minWidth: "160px" }}
                onClick={printPDF}
              >
                Print
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default EditBillPage;
