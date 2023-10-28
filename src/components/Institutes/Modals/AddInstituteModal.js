import { Modal, Select, TextInput } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addInstitute } from "../../../actions/unitActions";
import { ADD_INSTITUTE_RESET } from "../../../constants/unitConstants";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";

const AddInstituteModal = ({ opened, setOpened, units, setToggle }) => {
  const dispatch = useDispatch();
  const codeRef = useRef();
  const [unitId, setUnitId] = useState("");
  const nameOfInstituteRef = useRef();
  const nameOfANORef = useRef();
  const mobileRef = useRef();
  const officeRef = useRef();
  const { loading, success, error } = useSelector(
    (state) => state.addInstitute
  );

  const addInstituteHandler = (e) => {
    e.preventDefault();
    const institute = {
      unitId,
      code: codeRef.current.value,
      nameOfInstitute: nameOfInstituteRef.current.value,
      nameOfANO: nameOfANORef.current.value,
      mobileNumbers: [mobileRef.current.value],
      officeNumbers: [officeRef.current.value],
    };
    dispatch(addInstitute(institute));
  };

  useEffect(() => {
    if (opened) {
      dispatch({ type: ADD_INSTITUTE_RESET });
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
      title={<h4 className=' my-3'>Add Institute</h4>}
    >
      {loading && <Loader />}
      {error && !success && <Message variant='danger'>{error}</Message>}
      {success && !error && (
        <Message variant='success'>Institute added successfully</Message>
      )}
      <form
        className='d-flex flex-column'
        style={{ gap: "14px" }}
        onSubmit={addInstituteHandler}
      >
        <TextInput label='Code' ref={codeRef} required />
        <TextInput
          label='Name of institute'
          ref={nameOfInstituteRef}
          required
        />
        <Select
          label='Select unit'
          value={unitId}
          onChange={setUnitId}
          placeholder='Pick one'
          data={units.map((unit) => ({
            value: unit._id,
            label: unit.unit,
          }))}
          overflow='inside'
          required
        />
        <TextInput label='Name of ANO' ref={nameOfANORef} />
        <TextInput label='Mobile Number' ref={mobileRef} />
        <TextInput label='Office Number' ref={officeRef} />
        <Button type='submit'>Add</Button>
      </form>
    </Modal>
  );
};

export default AddInstituteModal;
