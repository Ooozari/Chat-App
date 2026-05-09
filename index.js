const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Sockets.io
io.on("connection", (socket) => {
  // client send message to server
  socket.on("user-message", ({ message }) => {
    // server pass the message to all user except sender
    socket.broadcast.emit("message", { message, isSender: false });
  });
});

// Express for http requests
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log("Server is running..."));
