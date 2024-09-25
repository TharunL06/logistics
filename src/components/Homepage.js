import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBolt, FaRegClock, FaHome, FaUser, FaHistory, FaTachometerAlt, FaSignOutAlt, FaTruck } from 'react-icons/fa';
import { RiMotorbikeFill } from 'react-icons/ri';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pushcart from '../assets/images/cartpush.svg';
import Delivery from '../assets/images/delivery.svg';
import Ontheway from '../assets/images/ontheway.svg';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'User';
  const firstLetter = email.charAt(0).toUpperCase();
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [showSection, setShowSection] = useState('home');

  // Slider settings with green highlight for active dot
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: (i) => (
      <div className="dot">
        <button className="rounded-full w-4 h-4 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"></button>
      </div>
    ),
    appendDots: (dots) => (
      <ul style={{ margin: "0px" }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            className={`slick-active ${dot.props.className.indexOf('slick-active') !== -1 ? 'bg-green-500' : ''}`}
          >
            {dot.props.children}
          </li>
        ))}
      </ul>
    ),
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Right Navbar */}
      <div className="w-1/5 bg-green-800 text-white p-4">
        <div className="flex flex-col items-center mb-6">
          <span className="p-3 bg-gray-300 rounded-full text-black font-bold">{firstLetter}</span>
          <h1 className="text-lg font-bold mt-2">Welcome back, {email.split('@')[0]}</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          <button className="flex items-center space-x-3 text-white hover:bg-gray-700 p-2 w-full text-left" onClick={() => setShowSection('home')}>
            <FaHome className="text-lg" />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-3 text-white hover:bg-gray-700 p-2 w-full text-left" onClick={() => setShowSection('profile')}>
            <FaUser className="text-lg" />
            <span>Profile</span>
          </button>
          <button className="flex items-center space-x-3 text-white hover:bg-gray-700 p-2 w-full text-left" onClick={() => setShowSection('history')}>
            <FaHistory className="text-lg" />
            <span>History</span>
          </button>
          <button className="flex items-center space-x-3 text-white hover:bg-gray-700 p-2 w-full text-left" onClick={() => setShowSection('dashboard')}>
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-3 text-white hover:bg-gray-700 p-2 w-full text-left" onClick={handleLogout}>
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-6 md:p-8">
        {showSection === 'home' && (
          <>
            {/* Slider Section */}
            <div className="mb-8">
              <Slider {...sliderSettings}>
                <div>
                  <img src={Pushcart} alt="slider1" className="w-full h-80 object-cover" />
                </div>
                <div>
                  <img src={Delivery} alt="slider2" className="w-full h-80 object-cover" />
                </div>
                <div>
                  <img src={Ontheway} alt="slider3" className="w-full h-80 object-cover" />
                </div>
                <div>
                  <img src="https://packerswala.com/wp-content/uploads/2023/01/packers-movers-charges-banner.jpg" alt="slider4" className="w-full h-80 object-cover" />
                </div>
              </Slider>
            </div>

            {/* Instant & Scheduled Delivery Section */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-green-100 rounded-lg shadow-md p-6 flex justify-between cursor-pointer" onClick={() => navigate('/instant-delivery')}>
                <div>
                  <h3 className="text-lg font-bold">Instant Delivery</h3>
                  <p className="text-sm">Courier takes only your package and delivers instantly.</p>
                </div>
                <FaBolt className="text-2xl text-green-600" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex justify-between cursor-pointer" onClick={() => navigate('/scheduled-delivery')}>
                <div>
                  <h3 className="text-lg font-bold">Scheduled Delivery</h3>
                  <p className="text-sm">Courier comes to pick up on your specified date and time.</p>
                </div>
                <FaRegClock className="text-2xl text-green-600" />
              </div>
            </div>

            {/* Estimate Section */}
            <div className="flex space-x-4">
              <div className="w-2/3 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Get an Estimate (takes ~2 mins)</h2>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <RiMotorbikeFill className="mr-2" />
                    <span>City:</span>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="ml-2 border rounded p-1"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </label>
                  <div className="flex space-x-2">
                    <button
                      className={`flex items-center p-2 border rounded ${selectedService === 'Two Wheelers' ? 'bg-green-200' : 'bg-white'}`}
                      onClick={() => setSelectedService('Two Wheelers')}
                    >
                      <RiMotorbikeFill className="text-xl mr-1" /> Two Wheelers
                    </button>
                    <button
                      className={`flex items-center p-2 border rounded ${selectedService === 'Trucks' ? 'bg-green-200' : 'bg-white'}`}
                      onClick={() => setSelectedService('Trucks')}
                    >
                      <FaTruck className="text-xl mr-1" /> Trucks
                    </button>
                    <button
                      className={`flex items-center p-2 border rounded ${selectedService === 'Packers & Movers' ? 'bg-green-200' : 'bg-white'}`}
                      onClick={() => setSelectedService('Packers & Movers')}
                    >
                      <RiMotorbikeFill className="text-xl mr-1" /> Packers & Movers
                    </button>
                    <button
                      className={`flex items-center p-2 border rounded ${selectedService === 'All India Parcel' ? 'bg-green-200' : 'bg-white'}`}
                      onClick={() => setSelectedService('All India Parcel')}
                    >
                      <RiMotorbikeFill className="text-xl mr-1" /> All India Parcel
                    </button>
                  </div>
                  <button className="mt-4 bg-blue-500 text-white p-2 rounded">Get Estimate</button>
                </div>
              </div>

              {/* Map Section */}
              <div className="w-1/3 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedCity}&zoom=13&size=300x200&key=REACT_APP_GOOGLE_MAPS_API_KEY`}
                  alt="Map"
                  className="rounded-lg"
                />
              </div>
            </div>
          </>
        )}

        {/* Profile Section */}
        {showSection === 'profile' && (
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">User Profile</h2>
            <p>Email: {email}</p>
            {/* Add more profile-related details here */}
          </div>
        )}

        {/* History Section */}
        {showSection === 'history' && (
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order History</h2>
            {/* Display static history data or fetch and display dynamic data */}
            <ul>
              <li>Order 1: Delivered</li>
              <li>Order 2: In Transit</li>
              <li>Order 3: Scheduled</li>
              {/* Add more orders here */}
            </ul>
          </div>
        )}

        {/* Dashboard Section */}
        {showSection === 'dashboard' && (
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Dashboard Overview</h2>
            <p>Some statistics and insights here.</p>
            {/* Add your dashboard components here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
