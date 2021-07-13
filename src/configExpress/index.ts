import express from 'express';
import 'express-async-errors';
import '../database/connection';
import 'reflect-metadata';

import URLRoutes from '../routes/url.routes'
import exceptionError from '../middleware/async-exception-errors'

const app = express();

export default () => {

  // BodyParser  
  app.use(express.json());

  // Routes
  app.use('/urls', URLRoutes);

  //Middlewares 
  app.use(exceptionError);

    
    return app
};