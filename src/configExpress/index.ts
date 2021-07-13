import express from 'express';
import '../database/connection';

const app = express();

export default () => {
    
    
    app.use(express.json());

    
    return app
};