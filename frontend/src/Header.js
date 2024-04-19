import React from 'react';
import FileUploader from './FileUploader'; // Import the FileUploader component

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <FileUploader /> {/* Include the FileUploader component here */}
    </header>
  );
};

export default Header;
