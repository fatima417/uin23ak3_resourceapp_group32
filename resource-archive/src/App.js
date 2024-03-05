import logo from './logo.svg';
import './App.css';
import {Router, Routes} from 'react-router-dom'
import ResourceLayout from './layout/ResourceLayout';



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ResourceLayout />} />
        </Routes>
    </Router>
  );
}

export default App;
