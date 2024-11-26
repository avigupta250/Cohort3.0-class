"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDb_1 = __importDefault(require("../config/connectDb"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const contentRoutes_1 = __importDefault(require("../routes/contentRoutes"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const Link_1 = require("../controllers/Link");
const app = (0, express_1.default)();
const PORT = 3000;
(0, connectDb_1.default)();
app.use(express_1.default.json());
console.log("Before Routs");
app.use("/api/v1", userRoutes_1.default);
app.use("/api/v1/", auth_1.default, contentRoutes_1.default);
app.get("/api/v1/brain/:shareLink", Link_1.shareLink);
app.post("/api/v1/brain/share", auth_1.default, Link_1.createLink);
console.log("After all routes");
app.get("/", (req, res) => {
    res.send("Hii there");
});
app.listen(PORT, () => {
    console.log("App is up and running");
});
