import Registration from './pages/registration';
import {Route, Routes } from 'react-router-dom'
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
