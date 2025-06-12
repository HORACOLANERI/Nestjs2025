import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PacienteService } from '../service/paciente.service';
import { CreatePacienteDto } from '../dtos/create-paciente.dto';
import { UpdatePacienteDto } from '../dtos/update-paciente.dto';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  // POST /pacientes → crear nuevo paciente
  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  // GET /pacientes → listar pacientes activos
  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  // GET /pacientes/:id → buscar un paciente por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findOne(id);
  }

  // PATCH /pacientes/:id → actualizar datos
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  // PATCH /pacientes/:id/deactivate → marcar como inactivo
  @Patch(':id/deactivate')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.deactivate(id);
  }

  // DELETE /pacientes/:id → eliminar totalmente
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.remove(id);
  }
}
