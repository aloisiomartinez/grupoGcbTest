import { Router } from 'express';

const endPoints = Router();

endPoints.get('/', (req, res) => {
  res.status(200).json({
    api: 'Grupo GCB - Back-end Test',
    endpoints: [
      {
        route: '[POST] /doctors',
        description: 'Create a new Doctor.',
      },
      {
        route: '[PUT] /doctors/:id',
        description: 'Update a Doctor by id.',
      },
      {
        route: '[GET] /doctors',
        description: 'Returns all registered doctors',
      },
      {
        route: '[GET] /doctors/crm:crm',
        description: 'Look for a doctor with the same crm',
      },
      {
        route: '[GET] /doctors/phone:phone',
        description: 'Look for a doctor with the same phone',
      },
      {
        route: '[GET] /doctors/phone:phone',
        description: 'Look for a doctor with the same phone',
      },
      {
        route: '[GET] /doctors/cellphone:cellphone',
        description: 'Look for a doctor with the same cellphone',
      },
      {
        route: '[GET] /doctors/cep:cep',
        description: 'Look for a doctor with the same cep',
      },
      {
        route: '[GET] /doctors/logradouro:logradouro',
        description: 'Look for a doctor with the same logradouro',
      },
      {
        route: '[GET] /doctors/neighborhood:neighborhood',
        description: 'Look for a doctor with the same neighborhood',
      },
      {
        route: '[GET] /doctors/city:city',
        description: 'Look for a doctor with the same city',
      },
      {
        route: '[GET] /doctors/uf:uf',
        description: 'Look for a doctor with the same uf',
      },
      {
        route: '[DELETE] /doctors/:id',
        description: 'Delete a doctor by id.',
      },
    ],
  });
});

export default endPoints;
