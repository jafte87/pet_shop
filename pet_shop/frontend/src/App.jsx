import Home from './pages/Home';
import DryFood from './pages/DryFood';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dryfood" element={<DryFood />} />
    </Routes>
      );
}

export default App
