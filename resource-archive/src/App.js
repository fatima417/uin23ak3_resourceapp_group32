import './App.css';
import {Router, Routes, Route} from 'react-router-dom'
import ResourceLayout from './layout/ResourceLayout';
import { BrowserRouter } from 'react-router-dom';
import Resource from './components/Resource';



function App() {
  return (

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResourceLayout />} >
            <Route path="html" element={<Resource category={"html"} title={"HTML"}/>} />
            <Route path="css" element={<Resource category={"css"} title={"CSS"}/>} />
            <Route path="react" element={<Resource category={"react"} title={"React"}/>} />
            <Route path="javascript" element={<Resource category={"javascript"} title={"Javascript"}/>} />
            <Route path="sanity" element={<Resource category={"headless-cms"} title={"Sanity"}/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
