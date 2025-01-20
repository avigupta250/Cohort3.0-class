import { WebSocketServer } from "ws";
import { WebSocket } from "ws";

import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import {prismaClient} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8000 });

interface User {
  ws: WebSocket;
  room: string[];
  userId: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try{
    const decode = jwt.verify(token, JWT_SECRET);
  if (typeof decode == "string") return null;

  if (!decode || !decode.userId) {
    return null;
  }
  return decode.userId;
  }catch(err){
    return null;
  }
}
wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    ws.close();
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";

  const userId = checkUser(token);
  if (!userId) {
    ws.close();
    return;
  }

  // Add the user to the list
  users.push({ userId, room: [], ws });

  // Handle WebSocket close
  ws.on("close", () => {
    const index = users.findIndex((x) => x.ws === ws);
    if (index !== -1) {
      users.splice(index, 1);
    }
  });

  ws.on("message",async function message(data) {
    const parseData = JSON.parse(data as unknown as string);

    if (parseData.type === "join_room" && parseData.roomId) {
      const user = users.find((x) => x.ws === ws);
      if (user && !user.room.includes(parseData.roomId)) {
        user.room.push(parseData.roomId);
      }
    }

    if (parseData.type === "leave_room" && parseData.roomId) {
      const user = users.find((x) => x.ws === ws);
      if (user) {
        user.room = user.room.filter((x) => x !== parseData.roomId);
      }
    }

    if (parseData.type === "chat") {
      const roomId = parseData.roomId;
      const message = parseData.message;
      await prismaClient.chat.create({
        data:{
          roomId,
          message,
          userId
        }
      })

      users.forEach((user) => {
        if (user.room.includes(roomId)) {
          try {
            user.ws.send(
              JSON.stringify({
                type: "chat",
                message: message,
                roomId,
              })
            );
          } catch (error) {
            console.error("Failed to send message:", error);
          }
        }
      });
    }
  });
});
