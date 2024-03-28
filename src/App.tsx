import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/city/:name" Component={DetailsPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
