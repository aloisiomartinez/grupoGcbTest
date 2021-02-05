import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import DoctorsRepository from '../repositories/DoctorsRepository';

import CreateNewDoctorService from '../services/CreateNewDoctorService';

import validateCep from '../utils/ValidateCep';
import validateCrm from '../utils/ValidateCrm';
import validateSpecialties from '../utils/ValidateSpecialties';

export default class DoctorController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, crm, phone, cellphone, cep, specialty } = request.body;

      if (cep.length >= 10) {
        return response
          .status(400)
          .json({ error: 'Cep Invalid. Example: 11111-111' });
      }

      if (crm.length >= 10) {
        return response
          .status(400)
          .json({ error: 'Crm Invalid. Example: 11.111.11' });
      }

      if (specialty.length < 2) {
        return response
          .status(400)
          .json({ error: 'You need to have a minimum of 2 Specialties' });
      }

      const doctorsRepository = getCustomRepository(DoctorsRepository);

      const doctorExists = await doctorsRepository.getDoctorByCrm(crm);

      if (doctorExists) {
        return response
          .status(400)
          .json({ error: 'Crm is already registered.' });
      }

      const createNewDoctor = new CreateNewDoctorService();

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
      return response.json({ error: err });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, crm, phone, cellphone, cep, specialty } = request.body;

    if (cep.length >= 10) {
      return response
        .status(400)
        .json({ error: 'Cpf Invalid. Example: 11111-111' });
    }

    if (crm.length >= 10) {
      return response
        .status(400)
        .json({ error: 'Crm Invalid. Example: 11.111.11' });
    }

    if (cep) {
      const cepValidated = validateCep(cep);

      if (!cepValidated) {
        return response
          .status(400)
          .json({ error: 'Enter a valid zip code. Exemple: 111111-111' });
      }
    }

    if (crm) {
      const crmValidated = validateCrm(crm);

      if (!crmValidated) {
        return response
          .status(400)
          .json({ error: 'Enter a valid CRM. Exemplo: 11.111.11' });
      }
    }

    if (specialty.length < 2) {
      return response
        .status(400)
        .json({ error: 'You need to have a minimum of 2 Specialties' });
    }

    const specialtiesFiltered = validateSpecialties(specialty);

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctorExists = await doctorsRepository.getDoctorById(id);

    if (!doctorExists) {
      return response.status(404).json({ error: 'Doctor not found.' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    await doctorsRepository.update(id, {
      name,
      crm,
      phone,
      cellphone,
      cep,
      specialty: specialtiesFiltered,
    });

    return response.json({ message: 'Doctor Updated!' });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctorExists = await doctorsRepository.getDoctorById(id);

    if (!doctorExists) {
      return response.status(404).json({ error: 'Doctor not found.' });
    }

    await doctorsRepository.delete(id);

    return response.json({ message: 'Doctor deleted!' });
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctors = await doctorsRepository.find();

    return response.json(doctors);
  }

  public async getByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByName(name);

    if (!doctor) {
      return response
        .status(400)
        .json({ message: 'No doctor was found with that name' });
    }

    return response.json(doctor);
  }

  public async getByCrm(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { crm } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByCrm(crm);

    if (!doctor) {
      return response.status(400).json({ message: 'No Crm was found.' });
    }

    return response.json(doctor);
  }

  public async getByPhone(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { phone } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByPhone(Number(phone));

    if (!doctor) {
      return response.status(400).json({ message: 'No phone was found.' });
    }

    return response.json(doctor);
  }

  public async getByCellphone(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { cellphone } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByCellphone(
      Number(cellphone),
    );

    if (!doctor) {
      return response.status(400).json({ message: 'No cellphone was found.' });
    }

    return response.json(doctor);
  }

  public async getByCep(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { cep } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByCep(cep);

    if (!doctor) {
      return response.status(400).json({ message: 'No cep was found.' });
    }

    return response.json(doctor);
  }

  public async getByLogradouro(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { logradouro } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByLogradouro(logradouro);

    if (!doctor) {
      return response.status(400).json({ message: 'No logradouro was found.' });
    }

    return response.json(doctor);
  }

  public async getByNeighborhood(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { neighborhood } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByNeighborhood(
      neighborhood,
    );

    if (!doctor) {
      return response
        .status(400)
        .json({ message: 'No neighborhood was found.' });
    }

    return response.json(doctor);
  }

  public async getByCity(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { city } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByCity(city);

    if (!doctor) {
      return response.status(400).json({ message: 'No city was found.' });
    }

    return response.json(doctor);
  }

  public async getByUf(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { uf } = request.params;

    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const doctor = await doctorsRepository.getDoctorByUf(uf);

    if (!doctor) {
      return response.status(400).json({ message: 'No uf was found.' });
    }

    return response.json(doctor);
  }
}
