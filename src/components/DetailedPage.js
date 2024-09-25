import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DetailedPage = () => {
  const navigate = useNavigate(); // Hook to access navigate function

  // State for form inputs
  const [sendingAddress, setSendingAddress] = useState('');
  const [receiptName, setReceiptName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [packageImage, setPackageImage] = useState(null);

  const handleBack = () => {
    navigate(-1); // Function to go back to the previous page
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPackageImage(URL.createObjectURL(file)); // Create a local URL for the image
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)
    console.log({ sendingAddress, receiptName, contactNumber, packageImage });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <button
        onClick={handleBack}
        className="mb-4 text-blue-500 hover:underline"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4 text-green-600">Detailed Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block text-lg font-semibold" htmlFor="sendingAddress">What are you sending?</label>
          <input
            type="text"
            id="sendingAddress"
            value={sendingAddress}
            onChange={(e) => setSendingAddress(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-semibold" htmlFor="receiptName">Receipt Name:</label>
          <input
            type="text"
            id="receiptName"
            value={receiptName}
            onChange={(e) => setReceiptName(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-semibold" htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-semibold" htmlFor="packageImage">Picture of the Package:</label>
          <input
            type="file"
            id="packageImage"
            onChange={handleImageChange}
            className="mt-1 block w-full"
            accept="image/*"
            required
          />
        </div>

        {packageImage && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Preview of the Package:</h2>
            <img src={packageImage} alt="Package" className="mt-2 w-full h-auto rounded" />
          </div>
        )}

        <button type="submit" className="mt-4 bg-green-600 text-white p-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
};

export default DetailedPage;
