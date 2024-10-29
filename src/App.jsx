import './styles/App.css';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { GetContacts } from './pages/getContacts';
import { CreateContact } from './pages/createContact';
import { UpdateContact } from './pages/updateContact';
import { DisplayContacts } from './pages/showContacts';
import { DisplayContact } from './pages/displayContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to='/get' />} />
        <Route exact path="/get" element={<GetContacts />} />
        <Route exact path="/create" element={<CreateContact />} />
        <Route exact path="/update/:id" element={<UpdateContact />} />
        <Route exact path="/displayContacts" element={<DisplayContacts />} />
        <Route exact path="/displayContact/:id" element={<DisplayContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
