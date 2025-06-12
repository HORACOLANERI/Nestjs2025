import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './model/paciente.entity';
import { PacienteController } from './controller/paciente.controller';
import { PacienteService } from './service/paciente.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'clinica_dental',
      entities: [__dirname + '/model/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Paciente]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class AppModule {}
