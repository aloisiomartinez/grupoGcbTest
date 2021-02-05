import Doctor from '../models/Doctor';

interface CreateDoctorDTO {
  name: string;
  crm: string;
  phone: number;
  cellphone: number;
  cep: string;
  logradouro: string;
  neighborhood: string;
  city: string;
  uf: string;
  specialty: string[];
}

class DoctorsRepository {
  private doctors: Doctor[];

  constructor() {
    this.doctors = [];
  }

  public all(): Doctor[] | null {
    return this.doctors;
  }

  public getDoctorByName(name: string): Doctor | null {
    const findDoctorByName = this.doctors.find(
      (doctor) => doctor.name === name,
    );

    return findDoctorByName || null;
  }

  public create({
    name,
    crm,
    phone,
    cellphone,
    cep,
    specialty,
    logradouro,
    neighborhood,
    city,
    uf,
  }: CreateDoctorDTO): Doctor {
    const doctor = new Doctor({
      name,
      crm,
      phone,
      cellphone,
      cep,
      specialty,
      logradouro,
      neighborhood,
      city,
      uf,
    });

    this.doctors.push(doctor);

    return doctor;
  }
}

export default DoctorsRepository;
