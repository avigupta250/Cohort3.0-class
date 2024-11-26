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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareLink = exports.createLink = void 0;
const uuid_1 = require("uuid");
const Link_1 = require("../models/Link");
const Content_1 = require("../models/Content");
const createLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const share = req.body.share;
        if (share) {
            const existingLink = yield Link_1.Link.findOne({
                userId: req.userId
            });
            if (existingLink) {
                res.json({
                    hashId: existingLink.hash
                });
            }
            const randomUUID = (0, uuid_1.v4)();
            console.log(randomUUID);
            yield Link_1.Link.create({
                hash: randomUUID,
                userId: req.userId
            });
            res.json({
                hash: randomUUID,
                user: req.userId
            });
        }
        else {
            yield Link_1.Link.deleteOne({
                userId: req.userId
            });
            res.json({
                message: "Removed link"
            });
        }
    }
    catch (err) {
    }
});
exports.createLink = createLink;
const shareLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const hash = req.params.shareLink;
        console.log("hash", hash);
        const link = yield Link_1.Link.findOne({ hash: hash });
        console.log("Link", link);
        if (!link) {
            res.status(411).json({
                message: "Sorry incorrect input"
            });
            return;
        }
        const content = yield Content_1.Content.find({
            userId: link === null || link === void 0 ? void 0 : link.userId
        }).populate("userId");
        res.json({
            content
        });
    }
    catch (err) {
    }
});
exports.shareLink = shareLink;
