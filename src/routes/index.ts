import { Router } from 'express';

import doctorsRouter from './doctors.routes';
import endPoints from './endpoints.routes';

const routes = Router();

routes.use('/doctors', doctorsRouter);
routes.use('/endpoints', endPoints);

export default routes;
