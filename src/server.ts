import express from 'express';
import routes from './routes/index';

import './database';

const server = express();

server.use(express.json());
server.use(routes);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
