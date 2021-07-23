import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import "../database";

import URLRoutes from "../adapters/api/routes/url.routes";
import { exceptionError } from "../middleware";

const app = express();

export default () => {
  const allowedOrigins = ["http://localhost:3000"];

  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };
  app.use(cors(options));

  // BodyParser
  app.use(express.json());

  // Routes
  app.use(URLRoutes);

  //Middlewares
  app.use(exceptionError);

  return app;
};
