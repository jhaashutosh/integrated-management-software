import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import FormContainer from "../components/form/FormContainer";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      return navigate("/");
    }
  }, [userInfo, navigate]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <FormContainer>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <h1 className='my-4'>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label style={{ fontWeight: 500 }}>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label style={{ fontWeight: 500 }}>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>
          Sign In
        </Button>
      </Form>
      {/* <Row className='py-3'>
        <Col>
          New User? <Link to='/register'>Register</Link>
        </Col>
      </Row> */}
    </FormContainer>
  );
};

export default LoginPage;
