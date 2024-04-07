import express from  'express';
import routes  from './routes/indexRouter'
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);


//se utiliza export default para exportar una sola  función o clase.
export default app;