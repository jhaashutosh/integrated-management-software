import { Modal, Select, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editInstitute } from "../../../actions/unitActions";
import { EDIT_INSTITUTE_RESET } from "../../../constants/unitConstants";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";

const EditInstituteModal = ({
  opened,
  setOpened,
  units,
  institute,
  setToggle,
}) => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.editInstitute
  );
  const [editInstituteDetails, setEditInstituteDetails] = useState({
    code: "",
    nameOfInstitute: "",
    unit: "",
    nameOfANO: "",
    mobileNumbers: [],
    officeNumbers: [],
  });

  useEffect(() => {
    setEditInstituteDetails({
      code: institute.code,
      nameOfInstitute: institute.name,
      unit: institute.unitId,
      nameOfANO: institute.nameOfANO,
      mobileNumbers: institute.mobileNumbers || [],
      officeNumbers: institute.officeNumbers || [],
    });
  }, [institute]);

  const editInstituteHandler = (e) => {
    e.preventDefault();

    const updatedInstitute = {
      newUnitId: editInstituteDetails.unit,
      oldUnitId: institute.unitId,
      instituteId: institute.id,
      instituteCode: editInstituteDetails.code,
      nameOfInstitute: editInstituteDetails.nameOfInstitute,
      nameOfANO: editInstituteDetails.nameOfANO,
      mobileNumbers: editInstituteDetails.mobileNumbers,
      officeNumbers: editInstituteDetails.officeNumbers,
    };
    dispatch(editInstitute(updatedInstitute));
  };

  useEffect(() => {
    if (opened) {
      dispatch({ type: EDIT_INSTITUTE_RESET });
    }
  }, [dispatch, opened]);

  useEffect(() => {
    if (success && !error && !loading) {
      setToggle((prev) => !prev);
    }
  }, [error, loading, setToggle, success]);

  return (
    <Modal
      centered
      overlayOpacity={0.55}
      opened={opened}
      overlayBlur={3}
      onClose={() => setOpened(false)}
      title={<h4 className=' my-3'>Edit Institute</h4>}
    >
      {loading && <Loader />}
      {error && !success && <Message variant='danger'>{error}</Message>}
      {success && !error && (
        <Message variant='success'>Institute edited successfully</Message>
      )}
      <form
        className='d-flex flex-column'
        style={{ gap: "14px" }}
        onSubmit={editInstituteHandler}
      >
        <TextInput
          label='Code'
          required
          value={editInstituteDetails?.code}
          onChange={(e) =>
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              code: e.target.value,
            }))
          }
        />
        <TextInput
          label='Name of institute'
          required
          value={editInstituteDetails?.nameOfInstitute}
          onChange={(e) =>
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              nameOfInstitute: e.target.value,
            }))
          }
        />
        <Select
          label='Select unit'
          placeholder='Pick one'
          data={units.map((unit) => ({
            value: unit._id,
            label: unit.unit,
          }))}
          overflow='inside'
          required
          value={editInstituteDetails?.unit}
          onChange={(val) => {
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              unit: val,
            }));
          }}
        />
        <TextInput
          label='Name of ANO'
          required
          value={editInstituteDetails?.nameOfANO}
          onChange={(e) =>
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              nameOfANO: e.target.value,
            }))
          }
        />

        <TextInput
          label='Mobile Number'
          value={editInstituteDetails?.mobileNumbers[0]}
          onChange={(e) =>
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              mobileNumbers: [
                e.target.value,
                ...prevVal.mobileNumbers.slice(1),
              ],
            }))
          }
        />
        <TextInput
          label='Office Number'
          value={editInstituteDetails?.officeNumbers[0]}
          onChange={(e) =>
            setEditInstituteDetails((prevVal) => ({
              ...prevVal,
              officeNumbers: [
                e.target.value,
                ...prevVal.officeNumbers.slice(1),
              ],
            }))
          }
        />
        <Button type='submit'>Update</Button>
      </form>
    </Modal>
  );
};

export default EditInstituteModal;
