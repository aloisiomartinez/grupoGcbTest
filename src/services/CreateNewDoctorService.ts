import axios from 'axios';
import { getCustomRepository } from 'typeorm';

import Doctor from '../models/Doctor';
import DoctorsRepository from '../repositories/DoctorsRepository';
// import RequestApiCep from '../clients/RequestApiCep';
import validateCep from '../utils/ValidateCep';
import validateCrm from '../utils/ValidateCrm';
import validateSpecialties from '../utils/ValidateSpecialties';

interface Request {
  name: string;
  crm: string;
  phone: number;
  cellphone: number;
  cep: string;
  specialty: string[];
}

interface ResponseApiCep {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

class CreateNewDoctorService {
  public async execute({
    name,
    crm,
    phone,
    cellphone,
    cep,
    specialty,
  }: Request): Promise<Doctor> {
    const doctorsRepository = getCustomRepository(DoctorsRepository);

    // validate Specialty
    const specialtiesFiltered = validateSpecialties(specialty);

    // Validate CEP and CRM
    validateCep(cep);
    validateCrm(crm);

    // Request API to search zip addresses
    const response = await axios.get<ResponseApiCep>(
      `https://viacep.com.br/ws/${cep}/json`,
    );

    const { localidade, bairro, uf, logradouro } = response.data;
    console.log(localidade, bairro, uf, logradouro);
    if (!localidade || !bairro || !uf || !logradouro) {
      throw 'This zip code did not find addresses related to it.';
    }

    const doctor = doctorsRepository.create({
      name,
      crm,
      phone,
      cellphone,
      cep,
      logradouro,
      neighborhood: bairro,
      city: localidade,
      uf,
      specialty: specialtiesFiltered,
    });

    await doctorsRepository.save(doctor);

    return doctor;
  }
}

export default CreateNewDoctorService;
