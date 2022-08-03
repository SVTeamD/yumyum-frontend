import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mode from './pages/Mode';
import Login from './pages/Login';
import Auth from './hooks/Auth';
import CustomerLoad from './pages/customers/CustomerLoad';
import MerchantLoad from './pages/merchants/MerchantLoad';
import CustomerMain from './pages/customers/CustomerMain';
import CustomerOrder from './pages/customers/CustomerOrder';
import OrderDetails from './pages/OrderDetails';
import MerchantRegister from './pages/merchants/MerchantRegister';

export default function App() {
  return (
    <div style={{ backgroundColor: '#FFF', overflow: 'auto', height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<CustomerLoad />} />
          <Route path="/merchant" element={<MerchantLoad />} />
          <Route path="/stores" element={<CustomerMain />} />
          <Route path="/stores/details/:id" element={<CustomerOrder />} />
          <Route path="/stores/register" element={<MerchantRegister />} />
          <Route path="/stores/details" element={<CustomerOrder />} />
          <Route path="/order/details/:id" element={<OrderDetails />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
