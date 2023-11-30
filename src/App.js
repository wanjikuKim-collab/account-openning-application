import { Routes, Route } from 'react-router-dom';
import './App.css';
import AccountSettings from './Pages/AccountSettings';
import Home from './Pages/Home';
import Login from './Pages/Login';

//Auth Imports
import Register from './Pages/Register';
import Transactions from './Pages/Transactions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/account_settings' element={<AccountSettings />}></Route>
        <Route path='/transaction' element={<Transactions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
