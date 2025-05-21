import { Module } from '@nestjs/common';
import { CuentasService } from './service/cuentas.service';
import { CuentasController } from './controller/cuentas.controller';

@Module({
  imports: [],
  controllers: [CuentasController],
  providers: [CuentasService],
})
export class AppModule {}
