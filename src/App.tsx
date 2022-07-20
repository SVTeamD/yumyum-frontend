import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mode from './pages/Mode';
import Login from './pages/Login';
import MakeStore from './pages/MakeStore';
import Auth from './hooks/Auth';
import Profile from './hooks/Profile';
import CustomerLoad from './pages/customers/CustomerLoad';
import MerchantLoad from './pages/merchants/MerchantLoad';
import CustomerMain from './pages/customers/CustomerMain';

export default function App() {
  return (
    <div
      style={{ backgroundColor: '#FFF2EA', overflow: 'auto', height: '100vh' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<CustomerLoad />} />
          <Route path="/merchant" element={<MerchantLoad />} />
          <Route path="/stores" element={<CustomerMain />} />
          <Route path="/makestore" element={<MakeStore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
