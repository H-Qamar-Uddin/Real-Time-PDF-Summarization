import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:3000'); // Change to match the backend port

function App() {
  const [summaries, setSummaries] = useState([]);

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = reader.result.split(',')[1];
      const data = { fileName: file.name, fileData };
      socket.emit('upload', data);
    };

    reader.readAsDataURL(file);
  };

  socket.on('summarize', (data) => {
    setSummaries((prevSummaries) => [...prevSummaries, data]);
  });

  return (
    <div>
      <h1>Real-Time PDF Summarization</h1>
      <input type="file" onChange={(e) => handleFileUpload(e.target.files)} />
      <div>
        {summaries.map((summary, index) => (
          <div key={index}>
            <h2>Model 1 Summary:</h2>
            <p>{summary.model1}</p>
            <h2>Model 2 Summary:</h2>
            <p>{summary.model2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
