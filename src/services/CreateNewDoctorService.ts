import axios from 'axios';
import Doctor from '../models/Doctor';
import DoctorsRepository from '../repositories/DoctorsRepository';
// import RequestApiCep from '../clients/RequestApiCep';
import validateCep from '../utils/ValidateCep';
import validateCrm from '../utils/ValidateCrm';

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
  private doctorsRepository: DoctorsRepository;

  constructor(doctorsRepository: DoctorsRepository) {
    this.doctorsRepository = doctorsRepository;
  }

  public async execute({
    name,
    crm,
    phone,
    cellphone,
    cep,
    specialty,
  }: Request): Promise<Doctor> {
    const specialtiesFiltered = [''];
    const specialties = [
      'ALERGOLOGIA',
      'ANGIOLOGIA',
      'BUCO MAXILO',
      'CARDIOLOGIA CLÍNICA',
      'CARDIOLOGIA INFANTIL',
      'CIRURGIA CABEÇA E PESCOÇO',
      'CIRURGIA CARDÍACA',
      'CIRURGIA DE TÓRAX',
    ];

    // Validations of specialties
    if (specialty.length < 2) {
      throw Error('Specialty should have 2');
    }

    specialty.filter((element) => {
      if (specialties.includes(element.toUpperCase())) {
        specialtiesFiltered.push(element.toUpperCase());
      }
    });

    // Request API to search zip addresses
    const response = await axios.get<ResponseApiCep>(
      `https://viacep.com.br/ws/${cep}/json`,
    );

    const { localidade, bairro, uf, logradouro } = response.data;

    // Validate CEP and CRM
    const cepFormmated = validateCep(cep);

    const crmFormatted = validateCrm(crm);

    const doctor = this.doctorsRepository.create({
      name,
      crm: crmFormatted,
      phone,
      cellphone,
      cep: cepFormmated,
      logradouro,
      neighborhood: bairro,
      city: localidade,
      uf,
      specialty: specialtiesFiltered,
    });

    return doctor;
  }
}

export default CreateNewDoctorService;
