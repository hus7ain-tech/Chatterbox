import { Server } from "socket.io";
import http from "http";

import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getRecieverSocketId(userId) {
  return userSocketMap[userId];
}
// used to store online users
const userSocketMap = {}; // {userid: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId = socket.handshake.query.userId; // assuming userId is sent in the query params
  if (userId) userSocketMap[userId] = socket.id;

  // Broadcast to all clients that a user has connected
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
  });
});
export { io, app, server };
