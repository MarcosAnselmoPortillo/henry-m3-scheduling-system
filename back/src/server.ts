import express from  'express';
import routes  from './routes/indexRouter'
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);


//se utiliza export default para exportar una sola  función o clase.
export default app;