import './styles/App.css';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { GetContacts } from './pages/getContacts';
import { CreateContact } from './pages/createContact';
import { UpdateContact } from './pages/updateContact';
import { DisplayContacts } from './pages/showContacts';
import { ContactUpdated } from './pages/updated';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/get' />} />
        <Route path="/get" element={<GetContacts />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
        <Route path="/displayContacts" element={<DisplayContacts />} />
        <Route path="/contactUpdated" element={<ContactUpdated />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
