import './App.css';
import {Router, Routes, Route} from 'react-router-dom'
import ResourceLayout from './layout/ResourceLayout';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResourceLayout />} />
        </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
