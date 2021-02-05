import { Router } from 'express';

import DoctorsRepository from '../repositories/DoctorsRepository';
import CreateNewDoctorService from '../services/CreateNewDoctorService';

const doctorsRouter = Router();
const doctorsRepository = new DoctorsRepository();

// Receber a requisição, chamar outro arquivo, e devolver uma resposta

doctorsRouter.get('/', (request, response) => {
  const doctors = doctorsRepository.all();

  return response.json(doctors);
});

doctorsRouter.get('/name', (request, response) => {
  const { name } = request.body;

  const doctors = doctorsRepository.getDoctorByName(name);

  return response.json(doctors);
});

doctorsRouter.post('/', async (request, response) => {
  try {
    const { name, crm, phone, cellphone, cep, specialty } = request.body;

    const createNewDoctor = new CreateNewDoctorService(doctorsRepository);

    const doctor = await createNewDoctor.execute({
      name,
      crm,
      phone,
      cellphone,
      cep,
      specialty,
    });

    return response.json(doctor);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default doctorsRouter;
