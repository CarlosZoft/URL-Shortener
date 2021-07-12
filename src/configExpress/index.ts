import express from 'express';

const app = express();

export default () => {
    
    
    app.use(express.json());

    
    return app
};