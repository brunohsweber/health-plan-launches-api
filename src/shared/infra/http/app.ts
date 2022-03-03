import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

const app = express();

app.use(express.json());

console.log("Configurações do servidor ok!");

export { app };
