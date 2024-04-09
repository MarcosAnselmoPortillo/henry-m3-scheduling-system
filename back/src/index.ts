import server from './server';
import {PORT} from './config/envs';
import "reflect-metadata";
import { AppDataSource } from './config/appDataSource';

AppDataSource.initialize()
.then(res => {
    console.log('Database connected');
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error("Error while connecting to database", err);
});