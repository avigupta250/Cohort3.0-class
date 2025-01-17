import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middlewares";

import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema } from "@repo/common/types";
const app = express();

app.get("/", (req, res) => {
  res.send("Hii there");
});

app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
         res.json({
            messgae:"Incorrect Input"
        })

        return;
    }
});

app.post("/sigin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

app.post("/room", middleware, (req, res) => {
  res.json({
    roomId: 123,
  });
});
app.listen(5000);
