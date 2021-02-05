import { Router } from 'express';

import DoctorController from '../controllers/DoctorController';

const doctorsRouter = Router();
const doctorController = new DoctorController();

doctorsRouter.get('/', doctorController.getAll);
doctorsRouter.get('/:name', doctorController.getByName);
doctorsRouter.get('/crm/:crm', doctorController.getByCrm);
doctorsRouter.get('/phone/:phone', doctorController.getByPhone);
doctorsRouter.get('/cellphone/:cellphone', doctorController.getByCellphone);
doctorsRouter.get('/cep/:cep', doctorController.getByCep);
doctorsRouter.get('/logradouro/:logradouro', doctorController.getByLogradouro);
doctorsRouter.get(
  '/neighborhood/:neighborhood',
  doctorController.getByNeighborhood,
);
doctorsRouter.get('/city/:city', doctorController.getByCity);
doctorsRouter.get('/uf/:uf', doctorController.getByUf);

doctorsRouter.post('/', doctorController.create);

doctorsRouter.put('/:id', doctorController.update);

doctorsRouter.delete('/:id', doctorController.delete);

export default doctorsRouter;
