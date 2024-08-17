import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './components/PivateRoutes';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard" element={
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>} />
    </Routes>

  );
}

export default App;

