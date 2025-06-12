import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ type: 'date' })
  fechaNacimiento: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column({ default: true })
  activo: boolean; // Para marcar si el paciente está activo o desactivado
}
