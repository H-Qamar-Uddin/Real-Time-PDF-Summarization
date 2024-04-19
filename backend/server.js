const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const pdf = require('pdf-parse'); // Example PDF parsing library

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running on port ' + PORT);
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('upload', (data) => {
    const { fileData } = data;

    // Example: Extract text from PDF file
    pdf(Buffer.from(fileData, 'base64')).then((data) => {
      const summary = {
        model1: 'Example Model 1 Summary',
        model2: 'Example Model 2 Summary',
      };

      // Emit the summary to the client
      io.emit('summarize', summary);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
