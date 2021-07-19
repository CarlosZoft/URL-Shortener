import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import "../database";

import URLRoutes from "../adapters/api/routes/url.routes";
import { exceptionError } from "../middleware";

const app = express();

export default () => {
  // BodyParser
  app.use(express.json());

  // Routes
  app.use("/urls", URLRoutes);

  //Middlewares
  app.use(exceptionError);

  app.use(
    cors({
      origin: "http://localhost:3000/",
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );

  return app;
};
