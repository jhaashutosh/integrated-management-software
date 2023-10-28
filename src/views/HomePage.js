import React, { forwardRef, useEffect, useState } from "react";
import { Select } from "@mantine/core";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { Button, Col, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUnitList } from "../actions/unitActions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, units } = useSelector((state) => state.unitList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allInstitutes, setAllInstitutes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [unitId, setUnitId] = useState("");
  const [message, setMessage] = useState("");

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
          };
        });
        institutes = [...institutes, ...currInstitutes];
      });
      setAllInstitutes([...institutes]);
    }
  }, [units]);

  useEffect(() => {
    if (userInfo) {
      dispatch(getUnitList());
    }
  }, [userInfo, dispatch]);

  const generateBillHandler = () => {
    if (unitId && instituteId) {
      navigate(`/bill/?unitId=${unitId}&instituteId=${instituteId}`);
    } else {
      setMessage("Please select an institute");
      return;
    }
  };

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
            styles={{
              separatorLabel: {
                color: "#656A70",
              },
            }}
            itemComponent={forwardRef(
              ({ label, code, instituteId, unitId }, ref) => (
                <div
                  ref={ref}
                  className='px-4 py-2 d-flex align-items-center'
                  style={{ gap: "20px", cursor: "pointer" }}
                  onClick={() => {
                    setSearchValue(label);
                    setSelectValue(label);
                    setInstituteId(instituteId);
                    setUnitId(unitId);
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
          <Button
            type='button'
            variant='primary'
            className='mx-auto d-block'
            onClick={generateBillHandler}
          >
            Generate Bill
          </Button>
        </Col>
      )}
    </Container>
  );
};

export default HomePage;
