import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    sendingAddress,
    receiptName,
    contactNumber,
    packageImage,
    paymentAddress,
    paymentMethod,
    amount,
  } = state || {};

  const handleEditDetails = () => {
    navigate('/detailed', {
      state: {
        sendingAddress,
        receiptName,
        contactNumber,
        packageImage,
        paymentAddress,
        paymentMethod,
        amount,
      },
    });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-green-700">Confirm Delivery Details</h1>

      <div className="mt-6 space-y-4">
        {/* Pickup Location */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Pickup Location</h2>
          <p className="text-gray-600">{sendingAddress}</p>
        </div>

        {/* Delivery Location */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Delivery Location</h2>
          <p className="text-gray-600">{sendingAddress}</p>
        </div>

        {/* Package Information */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Package Details</h2>
          <p className="text-gray-600">{packageImage}</p>
        </div>

        {/* Recipient Contact */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Recipient Contact Number</h2>
          <p className="text-gray-600">{contactNumber}</p>
        </div>

        {/* Payment Information */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Payment Information</h2>
          <p className="text-gray-600">Method: {paymentMethod}</p>
          <p className="text-gray-600">Address: {paymentAddress}</p>
          <p className="text-gray-600">Amount: ${amount}</p>
        </div>

        {/* Recipient Name */}
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-lg font-semibold text-gray-800">Recipient Name</h2>
          <p className="text-gray-600">{receiptName}</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={handleEditDetails} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Edit Details
        </button>

        <button 
          onClick={() => { /* Logic to look for courier */ }} 
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          Look for Courier
        </button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
