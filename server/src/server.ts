import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { config } from "dotenv";
config();

const app = express();
const httpServer = createServer(app);

const PORT = process.env.PORT || 5000;

const io = new Server(httpServer);

const startServer = async () => {
  await createConnection().catch((error) => console.log(error));
  app.use(express.json());
  io.on("connection", (socket) => {
    socket.emit("connected");
    socket.on("click", () => {
      io.emit("clicked");
    });
  });

  app.get("", (_, res) => {
    res.json({
      w: "world",
    });
  });

  httpServer.listen(PORT, () => console.log(`Running on port: ${PORT}`));
};

startServer();
