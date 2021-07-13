import express from 'express';
import '../database/connection';
import 'reflect-metadata';

const app = express();

export default () => {
    
    
    app.use(express.json());

    
    return app
};