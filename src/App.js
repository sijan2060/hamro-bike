import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import AddVehicle from './pages/AddVehicle';
import EditVehicle from './pages/EditVehicle';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


// Layout for pages with Header
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <MainLayout>
              <Booking />
            </MainLayout>
          }
        />
        <Route
          path="/add-vehicle"
          element={
            <MainLayout>
              <AddVehicle />
            </MainLayout>
          }
        />
        <Route
          path="/edit-vehicle"
          element={
            <MainLayout>
              <EditVehicle />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;