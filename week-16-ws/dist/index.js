"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hii")
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event Handler
wss.on("connection", function (socket) {
    setInterval(() => {
        socket.send("Hii connected");
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
