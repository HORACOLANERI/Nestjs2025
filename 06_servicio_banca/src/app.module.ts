import { Module } from '@nestjs/common';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosController } from './controller/movimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './model/Movimiento';
import { Cuenta } from './model/Cuenta';
import { Cliente } from './model/Cliente';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nestuser',
    password: 'nestpass',
    database: 'bancabd',
    entities: [Movimiento, Cuenta, Cliente],
    synchronize: false,
  }), TypeOrmModule.forFeature([Movimiento, Cuenta, Cliente])],
  controllers: [MovimientosController],
  providers: [MovimientosService],
})
export class AppModule {}
