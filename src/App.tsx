import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mode from './pages/Mode';
import Login from './pages/Login';
import MakeStore from './pages/MakeStore';
import Auth from './hooks/Auth';
import Profile from './hooks/Profile';

export default function App() {
  return (
    <div
      style={{ backgroundColor: '#FFF2EA', overflow: 'auto', height: '100vh' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MakeStore" element={<MakeStore />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
