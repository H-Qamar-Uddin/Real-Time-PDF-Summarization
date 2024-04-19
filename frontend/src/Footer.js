import React from 'react';
import FileUploader from './FileUploader'; // Import the FileUploader component

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Real-Time PDF Summarization</p>
      <FileUploader /> {/* Include the FileUploader component here */}
    </footer>
  );
};

export default Footer;
