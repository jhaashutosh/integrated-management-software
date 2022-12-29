import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/RegisterPage";
import BillPage from "../views/BillPage";
import ProfilePage from "../views/ProfilePage";
import BillHistoryPage from "../views/BillHistoryPage";
import SchoolBillHistoryPage from "../views/SchoolBillHistoryPage";
import EditBillPage from "../views/EditBillPage";
import InstitutesPage from "../views/InstitutesPage";

const Main = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <main className='py-3' id='main-container'>
      <Container>
        <Routes>
          <Route path='/' element={userInfo ? <HomePage /> : <LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/bill' element={<BillPage />} />
          <Route path='/institutebills' element={<SchoolBillHistoryPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/billinghistory' element={<BillHistoryPage />} />
          <Route path='/editbill' element={<EditBillPage />} />
          <Route path='/institutes' element={<InstitutesPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default Main;
