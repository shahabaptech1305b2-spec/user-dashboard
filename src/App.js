import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/login';
import Dashboard from './Pages/User/dashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
