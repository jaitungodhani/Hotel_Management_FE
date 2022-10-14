import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseTable from './BaseTable';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './service/ProtectedRoute';
import store from './redux/store';



function App() {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  //   getStripeApiKey();
  // }, []);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path='/waiter' element={
            // <ProtectedRoute user_type="waiter">
            <BaseTable />
            // </ProtectedRoute>
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
