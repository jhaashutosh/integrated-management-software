import { Button as BootstrapButton } from "react-bootstrap";
import { Button as MantineButton, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstitute, getUnitList } from "../actions/unitActions";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import AddInstituteModal from "../components/Institutes/Modals/AddInstituteModal";
import EditInstituteModal from "../components/Institutes/Modals/EditInstituteModal";
import { DELETE_INSTITUTE_RESET } from "../constants/unitConstants";
import { useNavigate } from "react-router-dom";

const InstitutesPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, units } = useSelector((state) => state.unitList);
  const dispatch = useDispatch();
  const [allInstitutes, setAllInstitutes] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState({});
  const { error: deleteError, success: deleteSuccess } = useSelector(
    (state) => state.deleteInstitute
  );
  const [toggle, setToggle] = useState(false);

  // Redirecting if user is not logged in
  useEffect(() => {
    if (!userInfo) {
      return navigate(`/`);
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (units) {
      let institutes = [];
      units.forEach((un) => {
        const currInstitutes = un.institutes.map((inst) => {
          return {
            name: inst.nameOfInstitute,
            id: inst._id,
            unit: un.unit,
            unitId: un._id,
            code: inst.code,
            nameOfANO: inst.nameOfANO,
            mobileNumbers: inst.mobileNumbers,
            officeNumbers: inst.officeNumbers,
          };
        });
        institutes = [...institutes, ...currInstitutes];
      });
      setAllInstitutes([...institutes]);
    }
  }, [units]);

  useEffect(() => {
    dispatch({ type: DELETE_INSTITUTE_RESET });
    if (userInfo) {
      dispatch(getUnitList());
    }
  }, [userInfo, dispatch, toggle, deleteSuccess]);

  const deleteInstituteHandler = ({ unitId, instituteCode }) => {
    if (
      window.confirm(`Are you sure you want to delete the institute?`) === true
    ) {
      dispatch(deleteInstitute({ unitId, instituteCode }));
    }
  };

  return (
    <div>
      <AddInstituteModal
        opened={openAddModal}
        setOpened={setOpenAddModal}
        setToggle={setToggle}
        units={units ? units : []}
      />
      <EditInstituteModal
        opened={openEditModal}
        setOpened={setOpenEditModal}
        units={units ? units : []}
        institute={selectedInstitute}
        setToggle={setToggle}
      />
      {deleteError && !deleteSuccess && (
        <Message variant='danger'>{deleteError}</Message>
      )}
      {!deleteError && deleteSuccess && (
        <Message variant='success'>Institute deleted successfully</Message>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <BootstrapButton
            className='my-4 ms-auto d-block'
            onClick={() => setOpenAddModal(true)}
          >
            Add Institute
          </BootstrapButton>
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th style={{ fontWeight: "600" }}>Code</th>
                <th style={{ fontWeight: "600" }}>Institute</th>
                <th style={{ fontWeight: "600" }}>Unit</th>
              </tr>
            </thead>
            <tbody>
              {allInstitutes.map((inst, index) => (
                <tr key={inst.id}>
                  <td>{inst.code}</td>
                  <td>{inst.name}</td>
                  <td>{inst.unit}</td>
                  <td>
                    <MantineButton
                      variant='subtle'
                      onClick={() => {
                        setSelectedInstitute(inst);
                        setOpenEditModal(true);
                      }}
                    >
                      <FaEdit />
                    </MantineButton>
                  </td>
                  <td>
                    <MantineButton
                      variant='subtle'
                      color={"red"}
                      onClick={() =>
                        deleteInstituteHandler({
                          unitId: inst.unitId,
                          instituteCode: inst.code,
                        })
                      }
                    >
                      <RiDeleteBinLine />
                    </MantineButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default InstitutesPage;
