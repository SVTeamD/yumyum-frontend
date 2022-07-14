import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectMode from './pages/SelectMode';

function App() {
  return (
    <div
      style={{ backgroundColor: '#FFFFFF', overflow: 'auto', height: '100vh' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectMode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
