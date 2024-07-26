import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Menu from './pages/Menu';
import Login from './pages/admin/Login';
import AdminHome from './pages/admin/AdminHome';
import AdminAddMenu from './pages/admin/AddMenu';
import AddCategory from './pages/admin/AddCategory';


function App() {
  
const isAuthenticated = () => {
  // S
  return localStorage.getItem('authToken') !== null;
};
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={isAuthenticated() ? <AdminHome /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/add-menu"
          element={isAuthenticated() ? <AdminAddMenu /> : <Navigate to="/login" />}
        />
         <Route
          path="/admin/add-category"
          element={isAuthenticated() ? <AddCategory /> : <Navigate to="/login" />}
        />
       
      </Routes>
      
    </Router>
  );
}

export default App;
