import { IsString, IsEmail, IsDateString } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsString()
  telefono: string;

  @IsEmail()
  email: string;
}
