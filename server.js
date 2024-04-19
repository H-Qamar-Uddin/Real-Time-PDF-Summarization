const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const parsePdf = require('pdf-parse');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('upload', (data) => {
    const { fileName, fileData } = data;
    const buffer = Buffer.from(fileData, 'base64');

    parsePdf(buffer).then((data) => {
      const text = data.text;
      io.emit('summarize the pdf', { fileName, summary: text });
    });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});