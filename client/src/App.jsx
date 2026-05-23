import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Students from './Students';
import JobPostings from './JobPostings';
import Applications from './Applications';
import Apply from './Apply';
import Edit from './Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/jobpostings" element={<JobPostings />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;