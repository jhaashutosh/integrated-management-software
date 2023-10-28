import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "../reducers/userReducers";
import {
  addInstituteReducer,
  deleteInstituteReducer,
  editInstituteReducer,
  unitDetailsReducer,
  unitListReducer,
} from "../reducers/unitReducers";
import {
  billListReducer,
  deleteBillReducer,
  editBillReducer,
  filterBillsByDateReducer,
  filterBillsByRangeReducer,
  filterInstituteBillsByDateReducer,
  filterInstituteBillsByRangeReducer,
  InstituteBillListReducer,
  printBillDetailsReducer,
  saveBillReducer,
  updateBillReducer,
} from "../reducers/billReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  unitList: unitListReducer,
  unitDetails: unitDetailsReducer,
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateProfileReducer,
  saveBill: saveBillReducer,
  updateBill: updateBillReducer,
  billList: billListReducer,
  InstituteBillList: InstituteBillListReducer,
  deleteBill: deleteBillReducer,
  editBill: editBillReducer,
  printBillDetails: printBillDetailsReducer,
  addInstitute: addInstituteReducer,
  deleteInstitute: deleteInstituteReducer,
  editInstitute: editInstituteReducer,
  filterBillsByDate: filterBillsByDateReducer,
  filterBillsByRange: filterBillsByRangeReducer,
  filterInstituteBillsByDate: filterInstituteBillsByDateReducer,
  filterInstituteBillsByRange: filterInstituteBillsByRangeReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
