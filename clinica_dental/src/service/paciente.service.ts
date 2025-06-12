import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from '../model/paciente.entity';
import { CreatePacienteDto } from '../dtos/create-paciente.dto';
import { UpdatePacienteDto } from '../dtos/update-paciente.dto';

@Injectable()
export class PacienteService {
  remove(id: number) {
      throw new Error('Method not implemented.');
  }
  deactivate(id: number) {
      throw new Error('Method not implemented.');
  }
  update(id: number, updatePacienteDto: UpdatePacienteDto) {
      throw new Error('Method not implemented.');
  }
  findOne(id: number) {
      throw new Error('Method not implemented.');
  }
  findAll() {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  // Crear un nuevo paciente
  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(paciente);
  }
}

  
