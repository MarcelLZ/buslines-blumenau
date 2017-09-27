import express from 'express';
import routes from './routes';

const app = express();

app.set('PORT', process.env.PORT || 5000);
app.use('/api', routes);

export default app;