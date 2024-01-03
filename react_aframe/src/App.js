import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMain from './Components/Navbar';
import Experience3D from './Components/Experience3D';
import Home from './Components/Home';
import Contact from './Components/Contact';
import './Components/Footer';
import Mailsend from './Components/Mailsend';

function App() {
  return (
    <div>
      <NavbarMain />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/Experience3D' element={<Experience3D />}>Experience3D</Route>
          <Route path='/Contacto' element={<Contact />}>Contact</Route>
          <Route path='/Mailsend' element={<Mailsend />}>Mailsend</Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


