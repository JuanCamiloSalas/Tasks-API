"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const { default: lowdb } = require('lowdb');
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
const createConnection = () => {
    const adapter = new FileSync_1.default('db.json');
    const db = lowdb(adapter);
    db.defaults({ tasks: [] }).write();
};
exports.createConnection = createConnection;
