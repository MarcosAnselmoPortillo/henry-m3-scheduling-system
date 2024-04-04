import server from './server';
import {PORT} from './config/envs';

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});