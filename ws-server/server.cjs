const WebSocket = require("ws");

const PORT = 5174;
const PATH = "/ws";

const wss = new WebSocket.Server({ port: PORT, path: PATH });
const clients = new Set();

wss.on("connection", (ws, req) => {
  const ip = req.socket.remoteAddress;
  console.log(`Client connected from ${ip}`);
  clients.add(ws);

  ws.on("message", (message, isBinary) => {
    console.log(`Received ${isBinary ? "binary" : "text"}: ${message.byteLength || message.length} bytes`);

    if (isBinary) {
      // Broadcast to all other clients (including Python)
      for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message); // Send raw PCM audio
        }
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
    clients.delete(ws);
  });
});

console.log(`WebSocket server running at ws://localhost:${PORT}${PATH}`);
