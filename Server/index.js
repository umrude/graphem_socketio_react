const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 8080;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

// When there's a new person on localhost:3000
io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Join a conversation (useChat, line: 14)
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages (useChat, line: 18)
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket (useChat, line: 29)
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
