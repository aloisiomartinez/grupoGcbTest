import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  crm: string;

  @Column('decimal')
  phone: number;

  @Column('decimal')
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

  @Column('text', { array: true })
  specialty: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Doctor;
