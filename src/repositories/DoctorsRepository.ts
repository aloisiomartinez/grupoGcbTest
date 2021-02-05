import { EntityRepository, Repository } from 'typeorm';

import Doctor from '../models/Doctor';

// interface CreateDoctorDTO {
//   name: string;
//   crm: string;
//   phone: number;
//   cellphone: number;
//   cep: string;
//   logradouro: string;
//   neighborhood: string;
//   city: string;
//   uf: string;
//   specialty: string[];
// }

@EntityRepository(Doctor)
class DoctorsRepository extends Repository<Doctor> {
  public async getDoctorByName(name: string): Promise<Doctor | null> {
    const findDoctorByName = await this.findOne({ where: { name } });

    return findDoctorByName || null;
  }

  public async getDoctorById(id: string): Promise<Doctor | null> {
    const findDoctorById = await this.findOne({ where: { id } });

    return findDoctorById || null;
  }

  public async getDoctorByCrm(crm: string): Promise<Doctor | null> {
    const findDoctorByCrm = await this.findOne({ where: { crm } });

    return findDoctorByCrm || null;
  }

  public async getDoctorByPhone(phone: number): Promise<Doctor | null> {
    const findDoctorPhone = await this.findOne({ where: { phone } });

    return findDoctorPhone || null;
  }

  public async getDoctorByCellphone(cellphone: number): Promise<Doctor | null> {
    const findDoctorCellphone = await this.findOne({ where: { cellphone } });

    return findDoctorCellphone || null;
  }

  public async getDoctorByCep(cep: string): Promise<Doctor | null> {
    const findDoctorCep = await this.findOne({ where: { cep } });

    return findDoctorCep || null;
  }

  public async getDoctorByLogradouro(
    logradouro: string,
  ): Promise<Doctor | null> {
    const findDoctorLogradouro = await this.findOne({ where: { logradouro } });

    return findDoctorLogradouro || null;
  }

  public async getDoctorByNeighborhood(
    neighborhood: string,
  ): Promise<Doctor | null> {
    const findDoctorNeighborhood = await this.findOne({
      where: { neighborhood },
    });

    return findDoctorNeighborhood || null;
  }

  public async getDoctorByCity(city: string): Promise<Doctor | null> {
    const findDoctorCity = await this.findOne({ where: { city } });

    return findDoctorCity || null;
  }

  public async getDoctorByUf(uf: string): Promise<Doctor | null> {
    const findDoctorUf = await this.findOne({ where: { uf } });

    return findDoctorUf || null;
  }
}

export default DoctorsRepository;
