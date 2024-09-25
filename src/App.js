// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Homepage from './components/Homepage';
import InstantDeliveryPage from './components/InstantDeliveryPage';
import ScheduledDeliveryPage from './components/ScheduledDeliveryPage';
import DetailedPage from './components/DetailedPage'; // Import the new DetailedPage component
import ConfirmDetails from './components/ConfirmDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/instant-delivery" element={<InstantDeliveryPage />} />
        <Route path="/scheduled-delivery" element={<ScheduledDeliveryPage />} />
        <Route path="/detailed" element={<DetailedPage />} /> {/* Add this route */}
        <Route path="/confirm-details" element={<ConfirmDetails />} />
        <Route path="/profile" element={<Homepage />} />
        <Route path="/history" element={<Homepage />} />
        <Route path="/dashboard" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
