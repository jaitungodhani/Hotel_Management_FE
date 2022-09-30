import './App.css';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import BaseTable from './BaseTable';

import Login from './Login';

function App() {
  
  return (
    
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/order' element={
            <BaseTable />
          }/>
          <Route path='/' element={
            <Login />
          }/>
        </Routes>
      </Router>
        
    </div>
   
  );
}

export default App;
