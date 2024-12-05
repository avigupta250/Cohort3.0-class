"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hii")
const ws_1 = require("ws");
// https://projects.100xdevs.com/tracks/ABEC/ABEC-3 
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSocket = [];
wss.on("connection", function (socket) {
    socket.on('message', (ev) => {
        var _a;
        //  @ts-ignore
        const parseData = JSON.parse(ev);
        console.log(parseData);
        if (parseData.type === 'join') {
            allSocket.push({ socket: socket, roomId: parseData.payload.roomId });
        }
        if (parseData.type === 'chat') {
            const currentUserRoom = (_a = allSocket.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.roomId;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].roomId == currentUserRoom) {
                    allSocket[i].socket.send(parseData.payload.message);
                }
            }
        }
    });
    socket.send("hello ");
});
