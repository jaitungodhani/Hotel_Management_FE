import './App.css';
import Table from './Table';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const table_data=[{
      "table_no":"T1"
    },
    {
        "table_no":"T2"
    },
    {
        "table_no":"T3"
    },
    {
      "table_no":"T4"
  },{
    "table_no":"T1"
  },
  {
      "table_no":"T2"
  },
  {
      "table_no":"T3"
  },
  {
    "table_no":"T4"
  },
  {
    "table_no":"T1"
  },
  {
      "table_no":"T2"
  },
  {
      "table_no":"T3"
  },
  {
    "table_no":"T4"
}
    ]
  return (
    
    <div className='App'>
      <Router>
        
      </Router>
        {table_data.map((item)=>(
          <Table item={item.table_no} />
        ))}
    </div>
   
  );
}

export default App;
