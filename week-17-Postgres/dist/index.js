"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const pgClient = new pg_1.Client("postgresql://neondb_owner:6eZUw0Thilqz@ep-small-butterfly-a5yd2pc4.us-east-2.aws.neon.tech/neondb?sslmode=require");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient2 = new pg_1.Client({
    user: "neondb_owner",
    password: "6eZUw0Thilqz",
    port: 5432,
    host: "ep-small-butterfly-a5yd2pc4.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});
pgClient.connect();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield pgClient.query("select * from users;");
        console.log(response.rows);
    });
}
main();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const response = yield pgClient.query(`INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}');DELETE * from users`);
        console.log(response);
        res.json({
            message: "User created"
        });
    }
    catch (err) {
    }
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield pgClient.query("select * from users;");
    console.log(response.rows);
    res.json({
        user: response.rows
    });
}));
app.get("/", (req, res) => {
    res.send("running");
});
app.listen(3000);
