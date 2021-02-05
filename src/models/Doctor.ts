import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  crm: string;

  @Column('integer')
  phone: number;

  @Column('integer')
  cellphone: number;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column('array')
  specialty: string[];
}

export default Doctor;
