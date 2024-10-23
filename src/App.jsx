import './styles/App.css';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { GetContacts } from './pages/getContacts';
import { CreateContact } from './pages/createContact';
import { UpdateContact } from './pages/updateContact';
import { DeleteContact } from './pages/deleteContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/get' />} />
        <Route path="/get" element={< GetContacts />} />
        <Route path="/create" element={< CreateContact/>} />
        <Route path="/update" element={< UpdateContact/>} />
        <Route path="/delete" element={< DeleteContact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
