"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDb_1 = __importDefault(require("../config/connectDb"));
const Auth_1 = require("../controllers/Auth");
const app = (0, express_1.default)();
const PORT = 3000;
(0, connectDb_1.default)();
app.use(express_1.default.json());
app.post("/signup", Auth_1.signUp);
app.post("/signin", Auth_1.sigin);
app.get("/", (req, res) => {
    res.send("Hii there");
});
app.listen(PORT, () => {
    console.log("App is up and running");
});
