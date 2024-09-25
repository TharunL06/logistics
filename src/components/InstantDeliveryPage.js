import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import { FaMotorcycle, FaCar, FaTruck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Map container style
const containerStyle = {
  width: '100%',
  height: '300px',
};

// Initial coordinates for the center of the map (Lagos, Nigeria)
const initialPosition = {
  lat: 6.5244,
  lng: 3.3792,
};

const InstantDelivery = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [pickupPosition, setPickupPosition] = useState(initialPosition);
  const [deliveryPosition, setDeliveryPosition] = useState(initialPosition);

  const navigate = useNavigate(); // Initialize the navigate hook

  // Handles place selection from the autocomplete input
  const handlePlaceChanged = (type, autocomplete) => {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) return;

    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    if (type === 'pickup') {
      setPickupLocation(place.formatted_address);
      setPickupPosition(location);
    } else {
      setDeliveryLocation(place.formatted_address);
      setDeliveryPosition(location);
    }
  };

  // Handle Vehicle Selection
  const handleVehicleSelection = (type) => {
    setVehicleType(type);
  };

  const handleBack = () => {
    // Implement back navigation logic here
    navigate(-1); // Navigates to the previous page
  };

  const handleNext = () => {
    // Navigate to the detailed page
    navigate('/detailed');
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <div className="p-6 space-y-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Back
          </button>
          <h1 className="text-2xl font-bold text-center text-gray-800">Instant Delivery</h1>
          <div className="w-16" /> {/* Placeholder for alignment */}
        </div>

        {/* Map Section */}
        <div className="h-72">
          <GoogleMap mapContainerStyle={containerStyle} center={pickupPosition} zoom={12}>
            <Marker position={pickupPosition} />
            <Marker position={deliveryPosition} />
          </GoogleMap>
        </div>

        {/* Input Fields Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Pickup Location</label>
            <Autocomplete
              onLoad={(autocomplete) => (window.pickupAutocomplete = autocomplete)}
              onPlaceChanged={() => handlePlaceChanged('pickup', window.pickupAutocomplete)}
            >
              <input
                type="text"
                placeholder="Search pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </Autocomplete>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Delivery Location</label>
            <Autocomplete
              onLoad={(autocomplete) => (window.deliveryAutocomplete = autocomplete)}
              onPlaceChanged={() => handlePlaceChanged('delivery', window.deliveryAutocomplete)}
            >
              <input
                type="text"
                placeholder="Search delivery location"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </Autocomplete>
          </div>

          {/* Vehicle Type Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Vehicle Type</label>
            <div className="flex justify-around">
              <button
                onClick={() => handleVehicleSelection('bike')}
                className={`p-4 border rounded-lg flex flex-col items-center transition ${vehicleType === 'bike' ? 'border-green-500 bg-green-100' : 'border-gray-300'
                  }`}
              >
                <FaMotorcycle className="text-2xl text-green-500" />
                <p className="text-sm text-gray-700 mt-1">Bike</p>
              </button>

              <button
                onClick={() => handleVehicleSelection('car')}
                className={`p-4 border rounded-lg flex flex-col items-center transition ${vehicleType === 'car' ? 'border-green-500 bg-green-100' : 'border-gray-300'
                  }`}
              >
                <FaCar className="text-2xl text-green-500" />
                <p className="text-sm text-gray-700 mt-1">Car</p>
              </button>

              <button
                onClick={() => handleVehicleSelection('truck')}
                className={`p-4 border rounded-lg flex flex-col items-center transition ${vehicleType === 'truck' ? 'border-green-500 bg-green-100' : 'border-gray-300'
                  }`}
              >
                <FaTruck className="text-xl text-green-500" />
                <p className="text-sm text-gray-700 mt-1">Truck</p>
              </button>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-12 py-2 rounded-md hover:bg-green-600 transition w-full md:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </LoadScript>
  );
};

export default InstantDelivery;
