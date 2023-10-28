import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/form/FormContainer";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { register } from "../actions/userActions";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      return navigate(`/`);
    }
  }, [userInfo, navigate]);

  function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password doesn't match");
    } else {
      setMessage(null);
      dispatch(register({ name, email, password }));
    }
  }

  return (
    <FormContainer>
      {loading && <Loader />}
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      <h1 className='my-4'>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className='my-3'>
          <Form.Label style={{ fontWeight: 500 }}>Name *</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label style={{ fontWeight: 500 }}>Email Address *</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group controlId='password'>
              <Form.Label style={{ fontWeight: 500 }}>Password *</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group controlId='confirmPassword'>
              <Form.Label style={{ fontWeight: 500 }}>
                Confirm password *
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='primary' className='my-3'>
          Sign Up
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an account? <Link to='/'>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
