import React from 'react';
import './App.css'
import Sidebar from './components/global/sidebar';
import Dashboard from './pages/Dashboard';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Employee from './pages/Employee';
import Leavemanagement from './pages/Leavemanagement';
import Notification from './pages/Notification';
import Department from './pages/Department';
import Support from './pages/Support';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/employee" element={<Employee/>}/>
            <Route path="/leavemanagement" element={<Leavemanagement/>}/>
            <Route path="/department" element={<Department/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/setting" element={<Settings/>}/>
          </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
