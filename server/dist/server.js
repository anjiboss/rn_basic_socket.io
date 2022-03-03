"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const PORT = process.env.PORT || 5000;
const io = new socket_io_1.Server(httpServer);
const startServer = async () => {
    await (0, typeorm_1.createConnection)().catch((error) => console.log(error));
    app.use(express_1.default.json());
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
//# sourceMappingURL=server.js.map