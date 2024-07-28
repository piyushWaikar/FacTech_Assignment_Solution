import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PMDetail from './pages/PMDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pm/:id" element={<PMDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
