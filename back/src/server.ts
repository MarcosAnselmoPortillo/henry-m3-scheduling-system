import express from  'express';
import routes  from './routes/indexRouter'


const app = express();

app.use(express.json());
app.use(routes);


//se utiliza export default para exportar una sola  función o clase.
export default app;