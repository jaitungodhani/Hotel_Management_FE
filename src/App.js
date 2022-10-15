import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseTable from './BaseTable';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import { isloginStart} from "./redux/actions";
import { useDispatch } from 'react-redux';

import ProtectedRoute from './service/ProtectedRoute';
// import store from './redux/store';



function App() {
  const dispatch = useDispatch();
  dispatch(isloginStart());
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/waiter' element={
            <ProtectedRoute user_type="waiter">
              <BaseTable />
            </ProtectedRoute>
          } />
          <Route path='/manager' element={
            <ProtectedRoute user_type="manager">
              <BaseTable />
            </ProtectedRoute>
          } />
          <Route path='/billdesk' element={
            <ProtectedRoute user_type="billdesk">
              <BaseTable />
            </ProtectedRoute>
          } />
          <Route exact path='/' element={
            <Login />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
